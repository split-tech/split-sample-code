import dayjs from 'dayjs';
import { WalletType } from '@/lib/enum';
import { SupportedChainIds, SupportedNetwork } from '@/lib/network';

export const formatSupportedNetworkToChainId = (network: string) => {
  switch (network) {
    case 'BLAST_SEPOLIA_TESTNET':
      return SupportedChainIds.BLAST_SEPOLIA;
    case 'ARBITRUM_SEPOLIA_TESTNET':
      return SupportedChainIds.ARBITRUM_SEPOLIA;
    case 'AVALANCHE_FUJI_TESTNET':
      return SupportedChainIds.AVALANCHE_FUJI;
    case 'BASE_SEPOLIA_TESTNET':
      return SupportedChainIds.BASE_SEPOLIA;
    case 'ETHEREUM_SEPOLIA_TESTNET':
      return SupportedChainIds.ETHEREUM_SEPOLIA;
    case 'KLAYTN_BAOBAB_TESTNET':
      return SupportedChainIds.KLAYTN_BAOBAB;
    case 'OPTIMISM_SEPOLIA_TESTNET':
      return SupportedChainIds.OPTIMISM_SEPOLIA;
    default:
      throw Error();
  }
};

export const formatChainIdToName = (chainId: number) => {
  switch (chainId) {
    case SupportedChainIds.BLAST_SEPOLIA:
      return 'Blast Sepolia';
    case SupportedChainIds.ARBITRUM_SEPOLIA:
      return 'Arbitrum Sepolia';
    case SupportedChainIds.AVALANCHE_FUJI:
      return 'Avalanche Fuji';
    case SupportedChainIds.BASE_SEPOLIA:
      return 'Base Sepolia';
    case SupportedChainIds.ETHEREUM_SEPOLIA:
      return 'Ethereum Sepolia';
    case SupportedChainIds.KLAYTN_BAOBAB:
      return 'Klaytn Baobab';
    case SupportedChainIds.OPTIMISM_SEPOLIA:
      return 'Optimism Sepolia';
    default:
      return 'Unsupported';
  }
};

export const formatAddress = (walletAddress: string | undefined) => {
  if (!walletAddress) return '';
  return walletAddress
    .slice(0, 6)
    .concat('...')
    .concat(walletAddress.slice(-4));
};

export const formatChainIdToSupportedNetwork = (chainId: number) => {
  switch (chainId) {
    case SupportedChainIds.BLAST_SEPOLIA:
      return SupportedNetwork.BLAST_SEPOLIA_TESTNET;
    case SupportedChainIds.ARBITRUM_SEPOLIA:
      return SupportedNetwork.ARBITRUM_SEPOLIA_TESTNET;
    case SupportedChainIds.AVALANCHE_FUJI:
      return SupportedNetwork.AVALANCHE_FUJI_TESTNET;
    case SupportedChainIds.BASE_SEPOLIA:
      return SupportedNetwork.BASE_SEPOLIA_TESTNET;
    case SupportedChainIds.ETHEREUM_SEPOLIA:
      return SupportedNetwork.ETHEREUM_SEPOLIA_TESTNET;
    case SupportedChainIds.KLAYTN_BAOBAB:
      return SupportedNetwork.KLAYTN_BAOBAB_TESTNET;
    case SupportedChainIds.OPTIMISM_SEPOLIA:
      return SupportedNetwork.OPTIMISM_SEPOLIA_TESTNET;
    default:
      throw Error();
  }
};

export const formatNumber = (number: number): string => {
  if (Number.isNaN(number)) return '0';
  const formatter = new Intl.NumberFormat('en-US', {
    useGrouping: true,
  });

  return formatter.format(number);
};

export const formatDayDifference = (
  startDate: Date,
  endDate: Date,
  isTimestamp = false
): string => {
  // 현재 날짜와 비교
  const currentDate = new Date();

  // 날짜 간의 시간 차이를 밀리초로 계산
  const timeDifference =
    (endDate.getTime() - startDate.getTime()) * (isTimestamp ? 1000 : 1);

  // 밀리초를 일수로 변환 (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
  const daysDifference = Math.ceil(
    timeDifference / (24 * 60 * 60 * 1000 * 1000)
  );

  // 남은 일 수를 문자열로 반환
  if (daysDifference > 0) {
    // upcoming 상태로 처리
    if (startDate.getTime() * 1000 > currentDate.getTime()) {
      // 현재 날짜보다 시작 날짜가 미래인 경우
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const formattedDate = new Date(
        startDate.getTime() * 1000
      ).toLocaleDateString('en-US', options);
      return `${formattedDate}`;
    }

    // 현재 날짜보다 시작 날짜가 과거이지만 종료 날짜는 남아있는 경우
    return `${daysDifference} days left`;
  }

  if (daysDifference < 0) {
    // 과거 날짜인 경우
    return '';
  }

  return 'Today';
};

export const formatHttpsUrl = (url: string) => {
  return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(
    url
  );
};

export const formatTimeStampDifference = (
  startTimeStamp: number,
  endTimeStamp: number
): string => {
  // 현재 날짜와 비교
  const currentDate = new Date();

  // 타임스탬프를 Date 객체로 변환
  const startDate = new Date(startTimeStamp * 1000);
  const endDate = new Date(endTimeStamp * 1000);

  // 날짜 간의 시간 차이를 밀리초로 계산
  const timeDifference = endDate.getTime() - startDate.getTime();

  // 밀리초를 일수로 변환 (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
  const daysDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

  // 남은 일 수를 문자열로 반환
  if (daysDifference >= 0) {
    // upcoming 상태로 처리
    if (startDate >= currentDate) {
      // 현재 날짜보다 시작 날짜가 미래인 경우
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const formattedDate = new Date(startDate).toLocaleDateString(
        'en-US',
        options
      );
      return formattedDate;
    }
    // 현재 날짜보다 시작 날짜가 과거이지만 종료 날짜는 남아있는 경우
    return `${daysDifference} days left`;
  }
  if (daysDifference < 0) {
    // 과거 날짜인 경우
    return '';
  }

  // 시작일부터 종료일까지의 기간이 0일인 경우 ongoing으로 처리
  return 'Today';
};

export const formatTimeStampStatus = (
  startTimeStamp: number,
  endTimeStamp: number
): string => {
  // 현재 날짜와 비교
  const currentDate = new Date();

  // 타임스탬프를 Date 객체로 변환
  const startDate = new Date(startTimeStamp * 1000);
  const endDate = new Date(endTimeStamp * 1000);

  // 날짜 간의 시간 차이를 밀리초로 계산
  const timeDifference = endDate.getTime() - startDate.getTime();

  // 밀리초를 일수로 변환 (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
  const daysDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

  // 남은 일 수를 문자열로 반환
  if (daysDifference >= 0) {
    // upcoming 상태로 처리
    if (startDate > currentDate) {
      // 현재 날짜보다 시작 날짜가 미래인 경우
      return `Upcoming`;
    }
    // 현재 날짜보다 시작 날짜가 과거이지만 종료 날짜는 남아있는 경우
    return 'Ongoing';
  }
  if (daysDifference < 0) {
    // 과거 날짜인 경우
    return 'Ended';
  }

  // 시작일부터 종료일까지의 기간이 0일인 경우 ongoing으로 처리
  return 'Ongoing';
};

export const formatFactoryAddressByChainId = (chainId: number): string => {
  switch (chainId) {
    case SupportedChainIds.BLAST_SEPOLIA:
      return (
        process.env.NEXT_PUBLIC_BLAST_SEPOLIA_INCENTIVE_POOL_FACTORY_ADDR || ''
      );
    case SupportedChainIds.ARBITRUM_SEPOLIA:
      return (
        process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_INCENTIVE_POOL_FACTORY_ADDR ||
        ''
      );
    case SupportedChainIds.AVALANCHE_FUJI:
      return (
        process.env.NEXT_PUBLIC_AVALANCHE_FUJI_INCENTIVE_POOL_FACTORY_ADDR || ''
      );
    case SupportedChainIds.BASE_SEPOLIA:
      return (
        process.env.NEXT_PUBLIC_BASE_SEPOLIA_INCENTIVE_POOL_FACTORY_ADDR || ''
      );
    case SupportedChainIds.ETHEREUM_SEPOLIA:
      return (
        process.env.NEXT_PUBLIC_ETHEREUM_SEPOLIA_INCENTIVE_POOL_FACTORY_ADDR ||
        ''
      );
    case SupportedChainIds.KLAYTN_BAOBAB:
      return (
        process.env.NEXT_PUBLIC_KLAYTN_BAOBAB_INCENTIVE_POOL_FACTORY_ADDR || ''
      );
    case SupportedChainIds.OPTIMISM_SEPOLIA:
      return (
        process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_INCENTIVE_POOL_FACTORY_ADDR ||
        ''
      );
    default:
      throw new Error('Invalid Network');
  }
};

export const formatWalletConnectorIdToWalletType = (connectorName: string) => {
  switch (connectorName) {
    case 'MetaMask':
      return WalletType.METAMASK;
    case 'Coinbase Wallet':
      return WalletType.COINBASE;
    case 'WalletConnect':
      return WalletType.WALLET_CONNECT;
    case 'Rainbow':
      return WalletType.RAINBOW;
    case 'Okx Wallet':
      return WalletType.OKX_WALLET;
    default:
      return 'Unknown';
  }
};

export const formatEventAbiToName = (eventAbi: string): string => {
  const parts = eventAbi.split('(');
  const eventNameWithPossiblePrefix = parts[0].trim().split(' ');
  return eventNameWithPossiblePrefix[eventNameWithPossiblePrefix.length - 1];
};

export const formatEventApiWithoutType = (eventAbi: string): string => {
  // 괄호 안에 있는 부분을 추출합니다.
  const paramsString = eventAbi.match(/\((.*?)\)/)?.[1];

  if (paramsString) {
    // 각각의 파라미터를 분리합니다.
    const params = paramsString.split(',');

    // 각각의 파라미터에서 자료형을 제거합니다.
    const formattedParams = params.map((param) => {
      // 자료형이 있는지 확인합니다.
      const hasType = param.includes(' ');
      if (hasType) {
        // 자료형이 있는 경우 자료형을 제거합니다.
        return param.split(' ')[1];
      }
      // 자료형이 없는 경우 그대로 반환합니다.
      return param.trim();
    });

    // 제거된 자료형으로 포맷된 파라미터를 다시 조합하여 반환합니다.
    const formattedEventAbi = `event ${
      eventAbi.split('(')[0]
    }(${formattedParams.join(', ')})`;
    return formattedEventAbi;
  }

  return '';
};

export const formatUrlWithoutProtocol = (url: string): string => {
  return url.replace(/^https?:\/\//, '');
};

export const formatPathWithoutFollowings = (url: string): string => {
  const slashIndex = url.indexOf('/', url.indexOf('/') + 1);
  if (slashIndex !== -1) {
    return url.slice(0, slashIndex);
  }
  return url;
};

export const formatTimeStamp = (
  timestamp: number,
  formatString = 'YYYY-MM-DD hh:mm:ss A'
) => {
  // 타임스탬프를 dayjs 객체로 변환합니다.
  const date = dayjs.unix(timestamp);

  const formattedDate = date.format(formatString);
  return formattedDate;
};

export const formatTimeStampToDate = (timeStamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(timeStamp * 1000).toLocaleDateString(
    'en-US',
    options
  );
  return formattedDate;
};

export const formatTimeStampToDateTime = (timeStamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  const formattedDateTime = new Date(timeStamp * 1000).toLocaleTimeString(
    'en-US',
    options
  );
  return formattedDateTime;
};
