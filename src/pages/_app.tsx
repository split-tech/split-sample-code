import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SplitBrowserProvider } from '@split-tech/browser-sdk';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SplitBrowserProvider apiKey="" config={{}}>
      <Component {...pageProps} />
    </SplitBrowserProvider>
  );
}
