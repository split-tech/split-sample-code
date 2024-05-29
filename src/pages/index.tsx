import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { faker } from '@faker-js/faker';
import { SplitBrowserProvider } from '@split-tech/browser-sdk';

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
  const [userAddress, setUserAddress] = useState(
    faker.finance.ethereumAddress()
  );

  return (
    <SplitBrowserProvider apiKey={apiKey} config={{ referralParam: 'join' }}>
      <main
        className={`
      min-w-[500px] mx-auto p-4 space-y-4 
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      border border-gray-200 rounded-md shadow-md px-10 py-12 gap-2 flex flex-col
  `}
      >
        <h1 className="text-center text-xl">Split SDK Test</h1>
        <div>
          <label className="flex flex-col gap-2">
            API Key
            <input
              className="border border-gray-300 rounded-md p-1 focus:border-purple-500 focus:outline-none"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </label>
        </div>
        <form>
          <div>
            <label className="flex flex-col gap-2">
              User Wallet Address
              <input
                className="border border-gray-300 rounded-md p-1 focus:border-purple-500 focus:outline-none"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
              />
            </label>
          </div>
          {/* <button
            type="button"
            className="border border-gray-300 rounded-md p-1 text-white bg-purple-500 w-full hover:bg-purple-600"
            onClick={handleClick}
          >
            Run Test
          </button> */}
        </form>
      </main>
    </SplitBrowserProvider>
  );
}
