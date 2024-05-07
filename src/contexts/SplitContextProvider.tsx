import * as split from '@split-tech/browser-sdk';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { faker } from '@faker-js/faker';

export const Split = {
  bootstrap: async (apiKey: string) => {
    await split.init(apiKey);
  },
  addReferral: async (refereeAddress?: string) => {
    const mockReferralAddress = faker.finance.ethereumAddress();
    await split.addReferral(
      refereeAddress !== undefined ? refereeAddress : mockReferralAddress
    );
    alert(`Added Referral with mock referral address: ${mockReferralAddress}`);
  },
};

const SplitContext = createContext<typeof Split>(
  undefined as unknown as typeof Split
);

export const SplitContextProvider = ({ children }: PropsWithChildren) => {
  const providerValue = useMemo(() => ({ ...Split }), []);
  return (
    <SplitContext.Provider value={providerValue}>
      {children}
    </SplitContext.Provider>
  );
};

export const useSplit = () => useContext(SplitContext);
