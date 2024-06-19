import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findUser = gql(/* GraphQL */ `
  query FindUser {
    findUser {
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

export const useLazyFindUser = (options?: GQLOptions<typeof findUser>) => {
  return useLazyQuery(findUser, {
    ...options,
    fetchPolicy: "network-only",
  });
};
