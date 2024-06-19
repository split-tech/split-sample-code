import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';
import { AuthProvider } from '@/context/AuthProvider';
import { wagmiConfig } from '@/config/wagmi.config';
import { useGraphqlClient } from '@/graphql/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ModalProvider } from '@/context/Web3ModalProvider';

const App = ({
  Component,
  pageProps: { sessions, ...pageProps },
}: AppProps) => {
  const client = useGraphqlClient();
  const queryClient = new QueryClient();

  return (
    <ApolloProvider client={client}>
      <Web3ModalProvider>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </Web3ModalProvider>
    </ApolloProvider>
  );
};

export default App;
