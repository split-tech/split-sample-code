import { TopBar } from '@/components/PageLayout/TopBar';
import { SplitBrowserProvider } from '@split-tech/browser-sdk';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const params = query.join;

  if (!params) {
    return {
      redirect: {
        destination: '/?join=thisistest',
        permanent: false,
      },
    };
  }
  return {
    props: {
      referralCode: params || '',
    },
  };
};

export default function Home({ referralCode }: { referralCode: string }) {
  const [apiKey, setApiKey] = useState('');
  const { open } = useWeb3Modal();

  return (
    <SplitBrowserProvider apiKey={apiKey}>
      <TopBar />
      <label>
        Test API KEY
        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          style={{ border: '1px solid blue' }}
        />
      </label>
    </SplitBrowserProvider>
  );
}
