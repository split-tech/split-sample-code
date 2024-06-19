import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { TopBar } from './TopBar';

export const PageLayout = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-full w-full">
      <TopBar />
      <div
        className={clsx(
          'mx-auto mt-[42px] w-full min-w-[1280px] max-w-[1280px]',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
