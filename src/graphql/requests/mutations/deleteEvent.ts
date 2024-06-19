import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const deleteEvent = gql(/* GraphQL */ `
  mutation DeleteEvent($id: String!) {
    deleteEvent(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`);

export const useDeleteEvent = (options?: GQLOptions<typeof deleteEvent>) => {
  return useMutation(deleteEvent, {
    ...options,
  });
};
