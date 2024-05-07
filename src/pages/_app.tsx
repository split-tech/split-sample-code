import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Split, SplitContextProvider } from '../contexts/SplitContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SplitContextProvider>
      <Component {...pageProps} />
    </SplitContextProvider>
  );
}
