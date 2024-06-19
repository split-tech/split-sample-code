import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findAllReferrals = gql(/* GraphQL */ `
  query FindAllReferrals {
    findAllReferrals {
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
`);

export const useLazyFindAllReferrals = (options?: GQLOptions<typeof findAllReferrals>) => {
  return useLazyQuery(findAllReferrals, {
    ...options,
  });
};
