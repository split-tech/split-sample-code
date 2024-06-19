import { createConfig, http } from 'wagmi';
import {
  arbitrumSepolia,
  avalancheFuji,
  baseSepolia,
  blastSepolia,
  klaytnBaobab,
  optimismSepolia,
  sepolia,
} from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [
    blastSepolia,
    arbitrumSepolia,
    optimismSepolia,
    klaytnBaobab,
    avalancheFuji,
    baseSepolia,
    sepolia,
  ],
  ssr: true,
  connectors: [
    injected({ target: 'metaMask' }),
    coinbaseWallet({ appName: 'Split' }),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
    }),
  ],
  transports: {
    // [blast.id]: http(process.env.NEXT_PUBLIC_BLAST_MAINNET_PROVIDER_URL || ""),
    [arbitrumSepolia.id]: http(
      process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_PROVIDER_URL || ''
    ),
    [avalancheFuji.id]: http(
      process.env.NEXT_PUBLIC_AVALANCHE_FUJI_PROVIDER_URL || ''
    ),
    [baseSepolia.id]: http(
      process.env.NEXT_PUBLIC_BASE_SEPOLIA_PROVIDER_URL || ''
    ),
    [blastSepolia.id]: http(
      process.env.NEXT_PUBLIC_BLAST_SEPOLIA_PROVIDER_URL || ''
    ),
    [sepolia.id]: http(
      process.env.NEXT_PUBLIC_ETHEREUM_SEPOLIA_PROVIDER_URL || ''
    ),
    [optimismSepolia.id]: http(
      process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_PROVIDER_URL || ''
    ),
    [klaytnBaobab.id]: http(
      process.env.NEXT_PUBLIC_KLAYTN_BAOBAB_PROVIDER_URL || ''
    ),
  },
});
