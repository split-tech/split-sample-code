import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const createProduct = gql(/* GraphQL */ `
  mutation CreateProduct($input: ProductCreateInput!) {
    createProduct(input: $input) {
      id
      userAddress
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
    }
  }
`);

export const useCreateProduct = (options?: GQLOptions<typeof createProduct>) => {
  return useMutation(createProduct, {
    ...options,
  });
};
