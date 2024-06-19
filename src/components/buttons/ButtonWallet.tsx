import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export const ButtonWallet = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  { type = 'button', disabled, className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type === 'button' ? 'button' : 'submit'}
      className={clsx(
        'inline-flex items-center justify-center gap-[8px] rounded-md py-2 pl-2 pr-3 text-16/l/button text-gray-950',
        'hover:bg-gray-100 hover:text-gray-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default ButtonWallet;
