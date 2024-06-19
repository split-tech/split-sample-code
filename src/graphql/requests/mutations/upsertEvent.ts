import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const upsertEvent = gql(/* GraphQL */ `
  mutation UpsertEvent($input: EventInput!) {
    upsertEvent(input: $input) {
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
  }
`);

export const useUpsertEvent = (options?: GQLOptions<typeof upsertEvent>) => {
  return useMutation(upsertEvent, {
    ...options,
  });
};
