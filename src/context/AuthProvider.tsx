import { useWeb3Modal } from '@web3modal/wagmi/react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import { useAccount } from 'wagmi';
import { validateWalletNetwork } from '@/lib/network';
import { AuthTokenManager } from '@/graphql/client';

const AuthContext = createContext<{
  isAuthenticated: boolean;
  signIn: () => void;
  address?: string;
  chainId?: number;
}>({
  isAuthenticated: false,
  signIn: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { open } = useWeb3Modal();
  const { address: internalAddress, chainId: internalChainId } = useAccount();

  const cookies = useMemo(() => new Cookies(), []);
  const [accessToken, setAccessToken] = useState(
    cookies.get(AuthTokenManager.authCookieKey.accessToken)
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* 앱에서 유효성 검증이 완료된 주소, 네트워크 ID */
  const [appManagedAddress, setAppManagedAddress] = useState<
    string | undefined
  >(undefined);
  const [appManagedChainId, setAppManagedChainId] = useState<
    number | undefined
  >(undefined);

  const handleSignIn = () => {
    if (isAuthenticated) {
      open({ view: 'Account' });
    }
    open();
  };

  // NOTE: 쿠키를 최신화하여 내부 상태에 저장
  useEffect(() => {
    const handleCookieChange = () => {
      setAccessToken(cookies.get(AuthTokenManager.authCookieKey.accessToken));
    };

    cookies.addChangeListener(handleCookieChange);

    return () => {
      cookies.removeChangeListener(handleCookieChange);
    };
  }, [cookies]);

  // NOTE: 인증 상태 업데이트 - accessToken, address, chainId가 모두 존재할 경우 인증 상태로 변경
  useEffect(() => {
    console.log(internalAddress, internalChainId);

    if (
      validateWalletNetwork(internalAddress, internalChainId) &&
      accessToken
    ) {
      setAppManagedAddress(internalAddress);
      setAppManagedChainId(internalChainId);
      setIsAuthenticated(true);
    } else {
      setAppManagedAddress(undefined);
      setAppManagedChainId(undefined);
      setIsAuthenticated(false);
    }
  }, [internalAddress, internalChainId, accessToken]);

  const providerValue = useMemo(() => {
    return {
      isAuthenticated,
      signIn: () => handleSignIn(),
      address: appManagedAddress,
      chainId: appManagedChainId,
    };
  }, [isAuthenticated, appManagedAddress, appManagedChainId]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
