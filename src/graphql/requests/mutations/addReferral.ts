import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const addReferral = gql(/* GraphQL */ `
  mutation AddReferral($input: ReferralInput!) {
    addReferral(input: $input) {
      id
      productId
      userReferrals {
        id
        referralId
        userAddress
        user {
          id
          address
          role
          status
          twitterUserName
          createdAt
          updatedAt
        }
        userReferralType
        claimed
        createdAt
        updatedAt
      }
    }
  }
`);

export const useAddReferral = (options?: GQLOptions<typeof addReferral>) => {
  return useMutation(addReferral, {
    ...options,
  });
};
