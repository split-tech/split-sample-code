import { useAuth } from '@/context/AuthProvider';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import ButtonWallet from '../buttons/ButtonWallet';
import { formatAddress } from '@/lib/formatter';

export const TopBar = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const { address, chainId, isAuthenticated, signIn } = useAuth();

  return (
    <div
      className={clsx(
        'flex h-[64px] w-screen justify-between self-stretch bg-gray-50 px-[20px] py-[14px]',
        className
      )}
    >
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <ButtonWallet onClick={() => signIn()}>
              {formatAddress(address)}
            </ButtonWallet>
          ) : (
            <button className="self-stretch" onClick={() => signIn()}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
