import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findEventById = gql(/* GraphQL */ `
  query FindEventById($eventId: String!) {
    findEventById(eventId: $eventId) {
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
  }
`);

export const useLazyFindEventById = (options?: GQLOptions<typeof findEventById>) => {
  return useLazyQuery(findEventById, {
    ...options,
  });
};
