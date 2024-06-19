import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const setProductStatus = gql(/* GraphQL */ `
  mutation SetProductStatus($input: ProductUpdateInput!) {
    setProductStatus(input: $input) {
      id
      name
      domain
      webLink
      twitterLink
      description
      network
      sdkInitialized
      status
      order
      createdAt
      updatedAt
      incentivePool {
        productId
        poolAddress
        createdAt
        updatedAt
      }
      events {
        id
        name
        description
        productId
        type
        totalEventNum
        maxRefereeLimitForReferrer
        startTimeStamp
        endTimeStamp
        validationType
        incentiveToken {
          id
          address
          name
          symbol
          decimal
          referrerAmountPerEvent
          refereeAmountPerEvent
          eventId
          createdAt
          updatedAt
        }
        eventLogValidation {
          eventId
          contractAddress
          eventAbi
          topics
          refereeArgs
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      referrals {
        id
        userReferrals {
          id
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
          referralId
          userReferralType
          claimed
          createdAt
          updatedAt
        }
        productId
        updated
        createdAt
        updatedAt
      }
    }
  }
`);

export const useSetProductStatus = (options?: GQLOptions<typeof setProductStatus>) => {
  return useMutation(setProductStatus, {
    ...options,
  });
};
