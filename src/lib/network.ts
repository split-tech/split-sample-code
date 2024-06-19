export const SupportedChainIds = {
  ARBITRUM_SEPOLIA: 421614,
  AVALANCHE_FUJI: 43113,
  BASE_SEPOLIA: 84532,
  BLAST_SEPOLIA: 168587773,
  // BLAST_MAINNET: 81457,
  ETHEREUM_SEPOLIA: 11155111,
  KLAYTN_BAOBAB: 1001,
  OPTIMISM_SEPOLIA: 11155420,
};

export enum SupportedNetwork {
  ARBITRUM_SEPOLIA_TESTNET = 'ARBITRUM_SEPOLIA_TESTNET',
  AVALANCHE_FUJI_TESTNET = 'AVALANCHE_FUJI_TESTNET',
  BASE_SEPOLIA_TESTNET = 'BASE_SEPOLIA_TESTNET',
  BLAST_SEPOLIA_TESTNET = 'BLAST_SEPOLIA_TESTNET',
  // BLAST_MAINNET = "BLAST_MAINNET",
  ETHEREUM_SEPOLIA_TESTNET = 'ETHEREUM_SEPOLIA_TESTNET',
  KLAYTN_BAOBAB_TESTNET = 'KLAYTN_BAOBAB_TESTNET',
  OPTIMISM_SEPOLIA_TESTNET = 'OPTIMISM_SEPOLIA_TESTNET',
}

export const isSupportedNetwork = (chainId: number): boolean => {
  const chainIds = Object.values(SupportedChainIds);
  return chainIds.includes(chainId);
};

export const validateWalletNetwork = (
  walletAddress: string | undefined,
  rawChainId: number | undefined
) => {
  if (walletAddress && rawChainId && isSupportedNetwork(rawChainId)) {
    return true;
  }
  return false;
};
