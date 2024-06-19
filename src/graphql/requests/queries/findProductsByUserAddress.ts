import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findProductsByUserAddress = gql(/* GraphQL */ `
  query FindProductsByUserAddress {
    findProductsByUserAddress {
      id
      userAddress
      name
      domain
      webLink
      twitterLink
      description
      network
      productAuth {
        productId
        apiKey
        createdAt
        updatedAt
      }
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
        referralVerifiedEvents {
          referral {
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
          referralId
          verifiedEventId
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
        referralVerifiedEvents {
          referralId
          verifiedEventId
          verifiedEvent {
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
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`);

export const useLazyFindProductsByUserAddress = (options?: GQLOptions<typeof findProductsByUserAddress>) => {
  return useLazyQuery(findProductsByUserAddress, {
    ...options,
  });
};
