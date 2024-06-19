import { useLazyQuery } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findTestReferralsByProductId = gql(/* GraphQL */ `
  query FindTestReferralsByProductId($productId: String!) {
    findTestReferralsByProductId(productId: $productId) {
      id
      productId
      referrerAddress
      refereeAddress
      createdAt
      updatedAt
    }
  }
`);

export const useLazyFindTestReferrals = (options?: GQLOptions<typeof findTestReferralsByProductId>) => {
  return useLazyQuery(findTestReferralsByProductId, {
    ...options,
    fetchPolicy: "network-only",
  });
};
