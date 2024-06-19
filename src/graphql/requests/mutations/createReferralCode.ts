import { gql } from "../__generated__";

export const createReferralCode = gql(/* GraphQL */ `
  mutation CreateReferralCode($input: CreateReferralCodeInput!) {
    createReferralCode(input: $input) {
      id
      twitterUserName
      referralCode
    }
  }
`);
