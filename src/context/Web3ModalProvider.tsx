import { AuthTokenManager, getGraphqlClient } from '@/graphql/client';
import { requestLogin, verifyLogin } from '@/graphql/requests';
import { SupportedChainIds } from '@/lib/network';
import { parseAddress } from '@/lib/parse';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getAccount } from '@wagmi/core';
import type {
  SIWECreateMessageArgs,
  SIWEVerifyMessageArgs,
} from '@web3modal/siwe';
import { createSIWEConfig } from '@web3modal/siwe';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { SiweMessage } from 'siwe';
import Cookies from 'universal-cookie';
import { WagmiProvider } from 'wagmi';
import type { State } from 'wagmi';
import {
  arbitrumSepolia,
  avalancheFuji,
  baseSepolia,
  blastSepolia,
  klaytnBaobab,
  optimismSepolia,
  sepolia,
} from 'wagmi/chains';

const queryClient = new QueryClient();

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '';

const metadata = {
  name: 'Sign in to Split',
  description: 'Referral marketing tool to manage on-chain performance',
  url: 'https://split.marketing', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'], // TODO: Media 세팅 후 변경
};

const chains = [
  arbitrumSepolia,
  avalancheFuji,
  baseSepolia,
  blastSepolia,
  klaytnBaobab,
  optimismSepolia,
  sepolia,
] as const;

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
});

const getMessageParams = async () => {
  return {
    domain: typeof window !== 'undefined' ? window.location.host : '',
    uri: typeof window !== 'undefined' ? window.location.origin : '',
    chains: Object.values(SupportedChainIds),
    statement: 'Sign in to Split',
  };
};

const formatMessage = (messageArgs: SIWECreateMessageArgs) => {
  const { address: unparsedAddress, ...args } = messageArgs;
  const address = parseAddress(unparsedAddress);
  if (!address) throw new Error('Invalid Address');
  try {
    const message = new SiweMessage({
      address,
      ...args,
    }).toMessage();
    return message;
  } catch (error) {
    console.error(error);
    return '';
  }
};

const getNonce = async (address?: string) => {
  const client = getGraphqlClient(process.env.NEXT_PUBLIC_GRAPHQL_URL);
  const { data: requestLoginData } = await client.mutate({
    mutation: requestLogin,
    variables: { input: { address } },
  });
  const nonce = requestLoginData?.requestLogin.nonce;
  if (!nonce) throw Error('Failed to get nonce');

  return Promise.resolve(nonce);
};

const getSession = async () => {
  const { address, chainId } = getAccount(wagmiConfig);
  const cookies = new Cookies();
  const accessToken = cookies.get(AuthTokenManager.authCookieKey.accessToken);

  if (!address || !chainId || !accessToken) return null;

  return { address, chainId };
};

const verifyMessage = async ({ message, signature }: SIWEVerifyMessageArgs) => {
  try {
    const client = getGraphqlClient(process.env.NEXT_PUBLIC_GRAPHQL_URL);
    const { data: verifyLoginData } = await client.mutate({
      mutation: verifyLogin,
      variables: { input: { message, signature } },
    });
    const token = verifyLoginData?.verifyLogin;
    if (token) {
      AuthTokenManager.setToken(token, {});
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const signOut = async () => {
  AuthTokenManager.removeToken();
  return true;
};

const siweConfig = createSIWEConfig({
  getMessageParams,
  createMessage: (messageArgs: SIWECreateMessageArgs) =>
    formatMessage(messageArgs),
  getNonce,
  getSession,
  verifyMessage,
  signOut,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'IBM Plex Sans',
    '--w3m-accent': '#8B3FFC',
  },
  siweConfig,
});

export const Web3ModalProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: State;
}) => {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
