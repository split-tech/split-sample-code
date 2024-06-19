import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const refreshApiKey = gql(/* GraphQL */ `
  mutation RefreshApiKey($input: ProductUpdateInput!) {
    refreshApiKey(input: $input) {
      id
      productAuth {
        productId
        apiKey
        createdAt
        updatedAt
      }
    }
  }
`);

export const useRefreshApiKey = (options?: GQLOptions<typeof refreshApiKey>) => {
  return useMutation(refreshApiKey, {
    ...options,
  });
};
