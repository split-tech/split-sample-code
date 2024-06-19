import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findUserByAddress = gql(/* GraphQL */ `
  query FindUserByAddress($input: UserInput!) {
    findUserByAddress(input: $input) {
      id
      address
      role
      status
      twitterUserName
      referralCode
      createdAt
      updatedAt
    }
  }
`);

export const useLazyFindUserByAddress = (options?: GQLOptions<typeof findUserByAddress>) => {
  return useLazyQuery(findUserByAddress, {
    ...options,
    fetchPolicy: "network-only",
  });
};
