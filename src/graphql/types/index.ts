import type { GQLReturnType } from '../client/graphql';
import type {
  findAllReferrals,
  findEventById,
  findProductById,
  findProductsByUserAddress,
  findUser,
} from '../requests';

export type ProductsResponse = NonNullable<
  GQLReturnType<typeof findProductsByUserAddress>['findProductsByUserAddress']
>;

export type ProductResponse = NonNullable<
  GQLReturnType<typeof findProductById>['findProductById']
>;

export type EventResponse = NonNullable<
  GQLReturnType<typeof findEventById>['findEventById']
>;
export type ReferralsResponse = NonNullable<
  GQLReturnType<typeof findAllReferrals>['findAllReferrals']
>;

export type UserResponse = NonNullable<
  GQLReturnType<typeof findUser>['findUser']
>;

export type Token = {
  accessToken: string;
  refreshToken: string;
};
