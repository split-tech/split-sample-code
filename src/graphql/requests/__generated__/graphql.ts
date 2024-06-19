/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any };
};

export type CreateReferralCodeInput = {
  /** 트위터 유저 네임 */
  twitterUserName: Scalars["String"]["input"];
};

/** 이벤트 정보 */
export type EventInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 설명 */
  description: Scalars["String"]["output"];
  /** 이벤트 종료 타임스탬프 */
  endTimeStamp: Scalars["Int"]["output"];
  eventLogValidation?: Maybe<EventLogValidationInfo>;
  /** 아이디 */
  id: Scalars["ID"]["output"];
  incentiveToken: IncentiveTokenInfo;
  /** 레퍼러당 레퍼리 제한 */
  maxRefereeLimitForReferrer?: Maybe<Scalars["Int"]["output"]>;
  /** 이름 */
  name: Scalars["String"]["output"];
  /** 제품 아이디 */
  productId: Scalars["String"]["output"];
  referralVerifiedEvents?: Maybe<Array<ReferralVerifiedEventInfo>>;
  /** 이벤트 시작 타임스탬프 */
  startTimeStamp: Scalars["Int"]["output"];
  /** 총 이벤트 발생 횟수 */
  totalEventNum: Scalars["Int"]["output"];
  /** 이벤트 타입 */
  type: EventType;
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  /** 이벤트 검증 타입 */
  validationType: EventValidationType;
};

export type EventInput = {
  /** 이벤트 설명 */
  description: Scalars["String"]["input"];
  /** 이벤트 종료 타임스탬프 */
  endTimeStamp: Scalars["Int"]["input"];
  /** 이벤트 검증 타입 - 이벤트 로그 */
  eventLogValidation?: InputMaybe<EventLogValidationInput>;
  /** 아이디 */
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** 보상 토큰 입력값 */
  incentiveToken?: InputMaybe<IncentiveTokenInput>;
  /** 레퍼러당 레퍼리 제한 */
  maxRefereeLimitForReferrer?: InputMaybe<Scalars["Int"]["input"]>;
  /** 이벤트 이름 */
  name: Scalars["String"]["input"];
  /** 제품 아이디 */
  productId: Scalars["String"]["input"];
  /** 이벤트 시작 타임스탬프 */
  startTimeStamp: Scalars["Int"]["input"];
  /** 총 이벤트 발생 횟수 */
  totalEventNum: Scalars["Int"]["input"];
  /** 이벤트 타입 */
  type?: InputMaybe<EventType>;
  /** 이벤트 검증 타입 */
  validationType: EventValidationType;
};

/** 트랜잭션 정보 */
export type EventLogValidationInfo = {
  /** 컨트랙트 주소 */
  contractAddress: Scalars["String"]["output"];
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 이벤트 ABI */
  eventAbi: Scalars["String"]["output"];
  /** 이벤트 아이디 */
  eventId: Scalars["String"]["output"];
  /** 레퍼리 주소 인덱스 */
  refereeArgs: Scalars["Int"]["output"];
  /** 인덱스 블록 넘버 */
  startBlock: Scalars["Int"]["output"];
  /** 토픽 */
  topics: Array<Scalars["String"]["output"]>;
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
};

export type EventLogValidationInput = {
  /** 컨트랙트 주소 */
  contractAddress: Scalars["String"]["input"];
  /** 이벤트 ABI */
  eventAbi: Scalars["String"]["input"];
  /** 레퍼리 주소 인덱스 */
  refereeArgs: Scalars["Int"]["input"];
  /** 인덱스 블록 넘버 */
  startBlock?: InputMaybe<Scalars["Int"]["input"]>;
  /** 토픽 */
  topics?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** 이벤트 종류 */
export type EventType = "NON_TRANSACTION" | "TRANSACTION";

/** 토큰 종류 */
export type EventValidationType = "EVENT_LOG" | "TOKEN" | "TRANSACTION";

/** 보상 풀 정보 */
export type IncentivePoolInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 보상 풀 주소 */
  poolAddress: Scalars["String"]["output"];
  /** 제품 아이디 */
  productId: Scalars["String"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
};

export type IncentivePoolInput = {
  /** 보상 풀 주소 */
  poolAddress: Scalars["String"]["input"];
};

/** 보상 토큰 정보 */
export type IncentiveTokenInfo = {
  /** 토큰 주소 */
  address: Scalars["String"]["output"];
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 토큰 자리수 */
  decimal: Scalars["Int"]["output"];
  /** 이벤트 아이디 */
  eventId: Scalars["String"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  /** 토큰 이름 */
  name: Scalars["String"]["output"];
  /** 이벤트당 레퍼리 수령 금액 */
  refereeAmountPerEvent?: Maybe<Scalars["Float"]["output"]>;
  /** 이벤트당 레퍼러 수령 금액 */
  referrerAmountPerEvent: Scalars["Float"]["output"];
  /** 토큰 심볼 */
  symbol: Scalars["String"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
};

export type IncentiveTokenInput = {
  /** 토큰 주소 */
  address: Scalars["String"]["input"];
  /** 토큰 자리수 */
  decimal: Scalars["Int"]["input"];
  /** 아이디 */
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** 토큰 이름 */
  name: Scalars["String"]["input"];
  /** 이벤트당 레퍼리 수령 금액 */
  refereeAmountPerEvent?: InputMaybe<Scalars["Float"]["input"]>;
  /** 이벤트당 레퍼러 수령 금액 */
  referrerAmountPerEvent: Scalars["Float"]["input"];
  /** 토큰 심볼 */
  symbol: Scalars["String"]["input"];
};

export type Mutation = {
  addReferral: ReferralInfo;
  createProduct: ProductInfo;
  createReferralCode: UserInfo;
  deleteEvent: EventInfo;
  refreshApiKey: ProductInfo;
  refreshTokens: Token;
  requestLogin: UserInfo;
  setIncentivePool: ProductInfo;
  setProductStatus: ProductInfo;
  updateUser: UserInfo;
  upsertEvent: EventInfo;
  verifyLogin: Token;
};

export type MutationAddReferralArgs = {
  input: ReferralInput;
};

export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};

export type MutationCreateReferralCodeArgs = {
  input: CreateReferralCodeInput;
};

export type MutationDeleteEventArgs = {
  id: Scalars["String"]["input"];
};

export type MutationRefreshApiKeyArgs = {
  input: ProductUpdateInput;
};

export type MutationRefreshTokensArgs = {
  input: TokenInput;
};

export type MutationRequestLoginArgs = {
  input: UserInput;
};

export type MutationSetIncentivePoolArgs = {
  input: ProductUpdateInput;
};

export type MutationSetProductStatusArgs = {
  input: ProductUpdateInput;
};

export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type MutationUpsertEventArgs = {
  input: EventInput;
};

export type MutationVerifyLoginArgs = {
  input: VerifyUserInput;
};

/** 제품 정보 */
export type ProductAuthInfo = {
  /** API Key */
  apiKey: Scalars["String"]["output"];
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 제품 아이디 */
  productId: Scalars["ID"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
};

export type ProductCreateInput = {
  /** 소개 */
  description: Scalars["String"]["input"];
  /** 제품 이름 */
  name: Scalars["String"]["input"];
  /** 보상 풀 네트워크 */
  network: SupportedNetwork;
  /** 정렬 */
  order: Scalars["Int"]["input"];
  /** 트위터 링크 */
  twitterLink?: InputMaybe<Scalars["String"]["input"]>;
  /** 웹 링크 */
  webLink: Scalars["String"]["input"];
};

/** 제품 정보 */
export type ProductInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 소개 */
  description: Scalars["String"]["output"];
  /** 제품 도메인 */
  domain: Scalars["String"]["output"];
  events?: Maybe<Array<EventInfo>>;
  /** 아이디 */
  id: Scalars["ID"]["output"];
  incentivePool?: Maybe<IncentivePoolInfo>;
  /** 제품 이름 */
  name: Scalars["String"]["output"];
  /** 보상 풀 네트워크 */
  network: SupportedNetwork;
  /** 정렬 */
  order: Scalars["Int"]["output"];
  productAuth?: Maybe<ProductAuthInfo>;
  referrals?: Maybe<Array<ReferralInfo>>;
  /** SDK 설치 여부 */
  sdkInitialized: Scalars["Boolean"]["output"];
  /** 제품 공개 여부 */
  status: Status;
  /** 트위터 링크 */
  twitterLink?: Maybe<Scalars["String"]["output"]>;
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  /** 사용자 지갑 주소 */
  userAddress: Scalars["String"]["output"];
  /** 웹 링크 */
  webLink: Scalars["String"]["output"];
};

export type ProductUpdateInput = {
  /** 제품 아이디 */
  id: Scalars["ID"]["input"];
  /** 보상 풀 입력값 */
  incentivePool?: InputMaybe<IncentivePoolInput>;
  /** 정렬 */
  order?: InputMaybe<Scalars["Int"]["input"]>;
  /** 제품 공개 여부 */
  status?: InputMaybe<Status>;
};

export type Query = {
  findAllReferrals: Array<ReferralInfo>;
  findEventById: EventInfo;
  findProductByApiKey: ProductInfo;
  findProductByDomain: ProductInfo;
  findProductById: ProductInfo;
  findProductsByUserAddress: Array<ProductInfo>;
  findTestReferralsByProductId: Array<TestReferralInfo>;
  findUser: UserInfo;
  findUserByAddress: UserInfo;
  findUserByReferralCode: UserInfo;
};

export type QueryFindEventByIdArgs = {
  eventId: Scalars["String"]["input"];
};

export type QueryFindProductByDomainArgs = {
  domain: Scalars["String"]["input"];
};

export type QueryFindProductByIdArgs = {
  id: Scalars["String"]["input"];
};

export type QueryFindTestReferralsByProductIdArgs = {
  productId: Scalars["String"]["input"];
};

export type QueryFindUserByAddressArgs = {
  input: UserInput;
};

export type QueryFindUserByReferralCodeArgs = {
  input: UserInput;
};

/** 레퍼럴 정보 */
export type ReferralInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  /** 제품 아이디 */
  productId: Scalars["String"]["output"];
  referralVerifiedEvents?: Maybe<Array<ReferralVerifiedEventInfo>>;
  /** 컨트랙트 업데이트 여부 */
  updated: Scalars["Boolean"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  userReferrals: Array<UserReferralInfo>;
};

export type ReferralInput = {
  /** 사용자 정보 */
  refereeInput: UserReferralInput;
  /** 추천인 정보 */
  referrerInput: UserReferralInput;
};

/** 검증된 이벤트 정보 */
export type ReferralVerifiedEventInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  referral?: Maybe<ReferralInfo>;
  /** 레퍼럴 아이디 */
  referralId: Scalars["String"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  verifiedEvent?: Maybe<EventInfo>;
  /** 검증된 이벤트 아이디 */
  verifiedEventId: Scalars["String"]["output"];
};

/** 사용자 역할 */
export type Role = "ADMIN" | "PARTNER" | "REFERRER" | "TEST" | "USER";

/** 사용자 상태 */
export type Status = "ACTIVE" | "DELETE" | "INACTIVE";

/** 컨트랙트에서 지원하는 네트워크 */
export type SupportedNetwork =
  | "ARBITRUM_SEPOLIA_TESTNET"
  | "AVALANCHE_FUJI_TESTNET"
  | "BASE_SEPOLIA_TESTNET"
  | "BLAST_SEPOLIA_TESTNET"
  | "ETHEREUM_SEPOLIA_TESTNET"
  | "KLAYTN_BAOBAB_TESTNET"
  | "OPTIMISM_SEPOLIA_TESTNET";

export type TestReferralInfo = {
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  /** 제품 아이디 */
  productId: Scalars["String"]["output"];
  /** 레퍼리 주소 */
  refereeAddress: Scalars["String"]["output"];
  /** 레퍼러 주소(테스트 주소) */
  referrerAddress: Scalars["String"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
};

export type Token = {
  /** Access token */
  accessToken: Scalars["JWT"]["output"];
  /** Refresh token */
  refreshToken: Scalars["JWT"]["output"];
};

export type TokenInput = {
  /** Access token */
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  /** Refresh token */
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** 사용자 정보 */
export type UserInfo = {
  /** 지갑 주소 */
  address: Scalars["String"]["output"];
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  /** 로그인용 일회용 논스 */
  nonce: Scalars["String"]["output"];
  /** 레퍼럴 코드 */
  referralCode?: Maybe<Scalars["String"]["output"]>;
  /** 역할 */
  role: Role;
  /** 역할 */
  status: Status;
  /** 트위터 유저 네임 */
  twitterUserName?: Maybe<Scalars["String"]["output"]>;
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  userReferrals?: Maybe<Array<UserReferralInfo>>;
};

export type UserInput = {
  /** 지갑 주소 */
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** 레퍼럴 코드 */
  referralCode?: InputMaybe<Scalars["String"]["input"]>;
};

/** 사용자의 레퍼럴 정보 */
export type UserReferralInfo = {
  /** 보상 수령 여부 */
  claimed: Scalars["Boolean"]["output"];
  /** 생성 일시 */
  createdAt: Scalars["DateTime"]["output"];
  /** 아이디 */
  id: Scalars["ID"]["output"];
  /** 레퍼럴 아이디 */
  referralId: Scalars["String"]["output"];
  /** 수정 일시 */
  updatedAt: Scalars["DateTime"]["output"];
  user?: Maybe<UserInfo>;
  /** 사용자 지갑 주소 */
  userAddress: Scalars["String"]["output"];
  /** 레퍼럴 사용자 타입 */
  userReferralType: UserReferralType;
};

export type UserReferralInput = {
  /** 사용자 지갑 주소 */
  userAddress: Scalars["String"]["input"];
  /** 레퍼럴 사용자 타입 */
  userReferralType: UserReferralType;
};

/** 레퍼럴 사용자 타입 */
export type UserReferralType = "REFEREE" | "REFERRER";

export type VerifyUserInput = {
  /** 메시지 */
  message: Scalars["String"]["input"];
  /** 서명 */
  signature: Scalars["String"]["input"];
};

export type AddReferralMutationVariables = Exact<{
  input: ReferralInput;
}>;

export type AddReferralMutation = {
  addReferral: {
    id: string;
    productId: string;
    userReferrals: Array<{
      id: string;
      referralId: string;
      userAddress: string;
      userReferralType: UserReferralType;
      claimed: boolean;
      createdAt: any;
      updatedAt: any;
      user?: {
        id: string;
        address: string;
        role: Role;
        status: Status;
        twitterUserName?: string | null;
        createdAt: any;
        updatedAt: any;
      } | null;
    }>;
  };
};

export type CreateProductMutationVariables = Exact<{
  input: ProductCreateInput;
}>;

export type CreateProductMutation = {
  createProduct: {
    id: string;
    userAddress: string;
    name: string;
    domain: string;
    webLink: string;
    twitterLink?: string | null;
    description: string;
    network: SupportedNetwork;
    sdkInitialized: boolean;
    status: Status;
    order: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type CreateReferralCodeMutationVariables = Exact<{
  input: CreateReferralCodeInput;
}>;

export type CreateReferralCodeMutation = {
  createReferralCode: { id: string; twitterUserName?: string | null; referralCode?: string | null };
};

export type DeleteEventMutationVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type DeleteEventMutation = {
  deleteEvent: {
    id: string;
    name: string;
    description: string;
    productId: string;
    type: EventType;
    totalEventNum: number;
    maxRefereeLimitForReferrer?: number | null;
    startTimeStamp: number;
    endTimeStamp: number;
    validationType: EventValidationType;
    createdAt: any;
    updatedAt: any;
  };
};

export type RefreshApiKeyMutationVariables = Exact<{
  input: ProductUpdateInput;
}>;

export type RefreshApiKeyMutation = {
  refreshApiKey: {
    id: string;
    productAuth?: { productId: string; apiKey: string; createdAt: any; updatedAt: any } | null;
  };
};

export type RefreshTokensMutationVariables = Exact<{
  input: TokenInput;
}>;

export type RefreshTokensMutation = { refreshTokens: { accessToken: any; refreshToken: any } };

export type RequestLoginMutationVariables = Exact<{
  input: UserInput;
}>;

export type RequestLoginMutation = {
  requestLogin: {
    id: string;
    address: string;
    role: Role;
    status: Status;
    nonce: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type SetIncentivePoolMutationVariables = Exact<{
  input: ProductUpdateInput;
}>;

export type SetIncentivePoolMutation = {
  setIncentivePool: {
    id: string;
    incentivePool?: { productId: string; poolAddress: string; createdAt: any; updatedAt: any } | null;
  };
};

export type SetProductStatusMutationVariables = Exact<{
  input: ProductUpdateInput;
}>;

export type SetProductStatusMutation = {
  setProductStatus: {
    id: string;
    name: string;
    domain: string;
    webLink: string;
    twitterLink?: string | null;
    description: string;
    network: SupportedNetwork;
    sdkInitialized: boolean;
    status: Status;
    order: number;
    createdAt: any;
    updatedAt: any;
    incentivePool?: { productId: string; poolAddress: string; createdAt: any; updatedAt: any } | null;
    events?: Array<{
      id: string;
      name: string;
      description: string;
      productId: string;
      type: EventType;
      totalEventNum: number;
      maxRefereeLimitForReferrer?: number | null;
      startTimeStamp: number;
      endTimeStamp: number;
      validationType: EventValidationType;
      createdAt: any;
      updatedAt: any;
      incentiveToken: {
        id: string;
        address: string;
        name: string;
        symbol: string;
        decimal: number;
        referrerAmountPerEvent: number;
        refereeAmountPerEvent?: number | null;
        eventId: string;
        createdAt: any;
        updatedAt: any;
      };
      eventLogValidation?: {
        eventId: string;
        contractAddress: string;
        eventAbi: string;
        topics: Array<string>;
        refereeArgs: number;
        createdAt: any;
        updatedAt: any;
      } | null;
    }> | null;
    referrals?: Array<{
      id: string;
      productId: string;
      updated: boolean;
      createdAt: any;
      updatedAt: any;
      userReferrals: Array<{
        id: string;
        userAddress: string;
        referralId: string;
        userReferralType: UserReferralType;
        claimed: boolean;
        createdAt: any;
        updatedAt: any;
        user?: {
          id: string;
          address: string;
          role: Role;
          status: Status;
          twitterUserName?: string | null;
          createdAt: any;
          updatedAt: any;
        } | null;
      }>;
    }> | null;
  };
};

export type UpsertEventMutationVariables = Exact<{
  input: EventInput;
}>;

export type UpsertEventMutation = {
  upsertEvent: {
    id: string;
    name: string;
    description: string;
    productId: string;
    type: EventType;
    totalEventNum: number;
    maxRefereeLimitForReferrer?: number | null;
    startTimeStamp: number;
    endTimeStamp: number;
    validationType: EventValidationType;
    createdAt: any;
    updatedAt: any;
    incentiveToken: {
      id: string;
      address: string;
      name: string;
      symbol: string;
      decimal: number;
      referrerAmountPerEvent: number;
      refereeAmountPerEvent?: number | null;
      eventId: string;
      createdAt: any;
      updatedAt: any;
    };
    eventLogValidation?: {
      eventId: string;
      contractAddress: string;
      eventAbi: string;
      topics: Array<string>;
      refereeArgs: number;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type VerifyLoginMutationVariables = Exact<{
  input: VerifyUserInput;
}>;

export type VerifyLoginMutation = { verifyLogin: { accessToken: any; refreshToken: any } };

export type FindAllReferralsQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllReferralsQuery = {
  findAllReferrals: Array<{
    id: string;
    productId: string;
    updated: boolean;
    createdAt: any;
    updatedAt: any;
    userReferrals: Array<{
      id: string;
      userAddress: string;
      referralId: string;
      userReferralType: UserReferralType;
      claimed: boolean;
      createdAt: any;
      updatedAt: any;
      user?: {
        id: string;
        address: string;
        role: Role;
        status: Status;
        twitterUserName?: string | null;
        createdAt: any;
        updatedAt: any;
      } | null;
    }>;
    referralVerifiedEvents?: Array<{
      referralId: string;
      verifiedEventId: string;
      verifiedEvent?: {
        id: string;
        name: string;
        description: string;
        productId: string;
        type: EventType;
        totalEventNum: number;
        maxRefereeLimitForReferrer?: number | null;
        startTimeStamp: number;
        endTimeStamp: number;
        validationType: EventValidationType;
        incentiveToken: {
          id: string;
          address: string;
          name: string;
          symbol: string;
          decimal: number;
          referrerAmountPerEvent: number;
          refereeAmountPerEvent?: number | null;
          eventId: string;
          createdAt: any;
          updatedAt: any;
        };
      } | null;
    }> | null;
  }>;
};

export type FindEventByIdQueryVariables = Exact<{
  eventId: Scalars["String"]["input"];
}>;

export type FindEventByIdQuery = {
  findEventById: {
    id: string;
    name: string;
    description: string;
    productId: string;
    type: EventType;
    totalEventNum: number;
    maxRefereeLimitForReferrer?: number | null;
    startTimeStamp: number;
    endTimeStamp: number;
    validationType: EventValidationType;
    createdAt: any;
    updatedAt: any;
    incentiveToken: {
      id: string;
      address: string;
      name: string;
      symbol: string;
      decimal: number;
      referrerAmountPerEvent: number;
      refereeAmountPerEvent?: number | null;
      eventId: string;
      createdAt: any;
      updatedAt: any;
    };
    eventLogValidation?: {
      eventId: string;
      contractAddress: string;
      eventAbi: string;
      topics: Array<string>;
      refereeArgs: number;
      createdAt: any;
      updatedAt: any;
    } | null;
    referralVerifiedEvents?: Array<{
      referralId: string;
      verifiedEventId: string;
      referral?: {
        id: string;
        productId: string;
        updated: boolean;
        createdAt: any;
        updatedAt: any;
        userReferrals: Array<{
          id: string;
          userAddress: string;
          referralId: string;
          userReferralType: UserReferralType;
          claimed: boolean;
          createdAt: any;
          updatedAt: any;
          user?: {
            id: string;
            address: string;
            role: Role;
            status: Status;
            twitterUserName?: string | null;
            createdAt: any;
            updatedAt: any;
          } | null;
        }>;
      } | null;
    }> | null;
  };
};

export type FindProductByDomainQueryVariables = Exact<{
  domain: Scalars["String"]["input"];
}>;

export type FindProductByDomainQuery = {
  findProductByDomain: {
    id: string;
    userAddress: string;
    name: string;
    domain: string;
    webLink: string;
    twitterLink?: string | null;
    description: string;
    network: SupportedNetwork;
    sdkInitialized: boolean;
    status: Status;
    order: number;
    createdAt: any;
    updatedAt: any;
    incentivePool?: { productId: string; poolAddress: string; createdAt: any; updatedAt: any } | null;
    events?: Array<{
      id: string;
      name: string;
      description: string;
      productId: string;
      type: EventType;
      totalEventNum: number;
      maxRefereeLimitForReferrer?: number | null;
      startTimeStamp: number;
      endTimeStamp: number;
      validationType: EventValidationType;
      createdAt: any;
      updatedAt: any;
      incentiveToken: {
        id: string;
        address: string;
        name: string;
        symbol: string;
        decimal: number;
        referrerAmountPerEvent: number;
        refereeAmountPerEvent?: number | null;
        eventId: string;
        createdAt: any;
        updatedAt: any;
      };
      eventLogValidation?: {
        eventId: string;
        contractAddress: string;
        eventAbi: string;
        topics: Array<string>;
        refereeArgs: number;
        createdAt: any;
        updatedAt: any;
      } | null;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        referral?: {
          id: string;
          productId: string;
          updated: boolean;
          createdAt: any;
          updatedAt: any;
          userReferrals: Array<{
            id: string;
            userAddress: string;
            referralId: string;
            userReferralType: UserReferralType;
            claimed: boolean;
            createdAt: any;
            updatedAt: any;
            user?: {
              id: string;
              address: string;
              role: Role;
              status: Status;
              twitterUserName?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
          }>;
        } | null;
      }> | null;
    }> | null;
    referrals?: Array<{
      id: string;
      productId: string;
      updated: boolean;
      createdAt: any;
      updatedAt: any;
      userReferrals: Array<{
        id: string;
        userAddress: string;
        referralId: string;
        userReferralType: UserReferralType;
        claimed: boolean;
        createdAt: any;
        updatedAt: any;
        user?: {
          id: string;
          address: string;
          role: Role;
          status: Status;
          twitterUserName?: string | null;
          createdAt: any;
          updatedAt: any;
        } | null;
      }>;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        verifiedEvent?: {
          id: string;
          name: string;
          description: string;
          productId: string;
          type: EventType;
          totalEventNum: number;
          maxRefereeLimitForReferrer?: number | null;
          startTimeStamp: number;
          endTimeStamp: number;
          validationType: EventValidationType;
          incentiveToken: {
            id: string;
            address: string;
            name: string;
            symbol: string;
            decimal: number;
            referrerAmountPerEvent: number;
            refereeAmountPerEvent?: number | null;
            eventId: string;
            createdAt: any;
            updatedAt: any;
          };
        } | null;
      }> | null;
    }> | null;
  };
};

export type FindProductByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type FindProductByIdQuery = {
  findProductById: {
    id: string;
    userAddress: string;
    name: string;
    domain: string;
    webLink: string;
    twitterLink?: string | null;
    description: string;
    network: SupportedNetwork;
    sdkInitialized: boolean;
    status: Status;
    order: number;
    createdAt: any;
    updatedAt: any;
    incentivePool?: { productId: string; poolAddress: string; createdAt: any; updatedAt: any } | null;
    events?: Array<{
      id: string;
      name: string;
      description: string;
      productId: string;
      type: EventType;
      totalEventNum: number;
      maxRefereeLimitForReferrer?: number | null;
      startTimeStamp: number;
      endTimeStamp: number;
      validationType: EventValidationType;
      createdAt: any;
      updatedAt: any;
      incentiveToken: {
        id: string;
        address: string;
        name: string;
        symbol: string;
        decimal: number;
        referrerAmountPerEvent: number;
        refereeAmountPerEvent?: number | null;
        eventId: string;
        createdAt: any;
        updatedAt: any;
      };
      eventLogValidation?: {
        eventId: string;
        contractAddress: string;
        eventAbi: string;
        topics: Array<string>;
        refereeArgs: number;
        createdAt: any;
        updatedAt: any;
      } | null;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        referral?: {
          id: string;
          productId: string;
          updated: boolean;
          createdAt: any;
          updatedAt: any;
          userReferrals: Array<{
            id: string;
            userAddress: string;
            referralId: string;
            userReferralType: UserReferralType;
            claimed: boolean;
            createdAt: any;
            updatedAt: any;
            user?: {
              id: string;
              address: string;
              role: Role;
              status: Status;
              twitterUserName?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
          }>;
        } | null;
      }> | null;
    }> | null;
    referrals?: Array<{
      id: string;
      productId: string;
      updated: boolean;
      createdAt: any;
      updatedAt: any;
      userReferrals: Array<{
        id: string;
        userAddress: string;
        referralId: string;
        userReferralType: UserReferralType;
        claimed: boolean;
        createdAt: any;
        updatedAt: any;
        user?: {
          id: string;
          address: string;
          role: Role;
          status: Status;
          twitterUserName?: string | null;
          createdAt: any;
          updatedAt: any;
        } | null;
      }>;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        verifiedEvent?: {
          id: string;
          name: string;
          description: string;
          productId: string;
          type: EventType;
          totalEventNum: number;
          maxRefereeLimitForReferrer?: number | null;
          startTimeStamp: number;
          endTimeStamp: number;
          validationType: EventValidationType;
          incentiveToken: {
            id: string;
            address: string;
            name: string;
            symbol: string;
            decimal: number;
            referrerAmountPerEvent: number;
            refereeAmountPerEvent?: number | null;
            eventId: string;
            createdAt: any;
            updatedAt: any;
          };
        } | null;
      }> | null;
    }> | null;
  };
};

export type FindProductsByUserAddressQueryVariables = Exact<{ [key: string]: never }>;

export type FindProductsByUserAddressQuery = {
  findProductsByUserAddress: Array<{
    id: string;
    userAddress: string;
    name: string;
    domain: string;
    webLink: string;
    twitterLink?: string | null;
    description: string;
    network: SupportedNetwork;
    sdkInitialized: boolean;
    status: Status;
    order: number;
    createdAt: any;
    updatedAt: any;
    productAuth?: { productId: string; apiKey: string; createdAt: any; updatedAt: any } | null;
    incentivePool?: { productId: string; poolAddress: string; createdAt: any; updatedAt: any } | null;
    events?: Array<{
      id: string;
      name: string;
      description: string;
      productId: string;
      type: EventType;
      totalEventNum: number;
      maxRefereeLimitForReferrer?: number | null;
      startTimeStamp: number;
      endTimeStamp: number;
      validationType: EventValidationType;
      createdAt: any;
      updatedAt: any;
      incentiveToken: {
        id: string;
        address: string;
        name: string;
        symbol: string;
        decimal: number;
        referrerAmountPerEvent: number;
        refereeAmountPerEvent?: number | null;
        eventId: string;
        createdAt: any;
        updatedAt: any;
      };
      eventLogValidation?: {
        eventId: string;
        contractAddress: string;
        eventAbi: string;
        topics: Array<string>;
        refereeArgs: number;
        createdAt: any;
        updatedAt: any;
      } | null;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        referral?: {
          id: string;
          productId: string;
          updated: boolean;
          createdAt: any;
          updatedAt: any;
          userReferrals: Array<{
            id: string;
            userAddress: string;
            referralId: string;
            userReferralType: UserReferralType;
            claimed: boolean;
            createdAt: any;
            updatedAt: any;
            user?: {
              id: string;
              address: string;
              role: Role;
              status: Status;
              twitterUserName?: string | null;
              createdAt: any;
              updatedAt: any;
            } | null;
          }>;
        } | null;
      }> | null;
    }> | null;
    referrals?: Array<{
      id: string;
      productId: string;
      updated: boolean;
      createdAt: any;
      updatedAt: any;
      userReferrals: Array<{
        id: string;
        userAddress: string;
        referralId: string;
        userReferralType: UserReferralType;
        claimed: boolean;
        createdAt: any;
        updatedAt: any;
        user?: {
          id: string;
          address: string;
          role: Role;
          status: Status;
          twitterUserName?: string | null;
          createdAt: any;
          updatedAt: any;
        } | null;
      }>;
      referralVerifiedEvents?: Array<{
        referralId: string;
        verifiedEventId: string;
        verifiedEvent?: {
          id: string;
          name: string;
          description: string;
          productId: string;
          type: EventType;
          totalEventNum: number;
          maxRefereeLimitForReferrer?: number | null;
          startTimeStamp: number;
          endTimeStamp: number;
          validationType: EventValidationType;
          incentiveToken: {
            id: string;
            address: string;
            name: string;
            symbol: string;
            decimal: number;
            referrerAmountPerEvent: number;
            refereeAmountPerEvent?: number | null;
            eventId: string;
            createdAt: any;
            updatedAt: any;
          };
        } | null;
      }> | null;
    }> | null;
  }>;
};

export type FindTestReferralsByProductIdQueryVariables = Exact<{
  productId: Scalars["String"]["input"];
}>;

export type FindTestReferralsByProductIdQuery = {
  findTestReferralsByProductId: Array<{
    id: string;
    productId: string;
    referrerAddress: string;
    refereeAddress: string;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type FindUserQueryVariables = Exact<{ [key: string]: never }>;

export type FindUserQuery = {
  findUser: {
    id: string;
    address: string;
    role: Role;
    status: Status;
    twitterUserName?: string | null;
    referralCode?: string | null;
    createdAt: any;
    updatedAt: any;
  };
};

export type FindUserByAddressQueryVariables = Exact<{
  input: UserInput;
}>;

export type FindUserByAddressQuery = {
  findUserByAddress: {
    id: string;
    address: string;
    role: Role;
    status: Status;
    twitterUserName?: string | null;
    referralCode?: string | null;
    createdAt: any;
    updatedAt: any;
  };
};

export const AddReferralDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddReferral" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ReferralInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addReferral" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userReferrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "referralId" } },
                      { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "role" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                      { kind: "Field", name: { kind: "Name", value: "claimed" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddReferralMutation, AddReferralMutationVariables>;
export const CreateProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProductCreateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createProduct" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "webLink" } },
                { kind: "Field", name: { kind: "Name", value: "twitterLink" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "network" } },
                { kind: "Field", name: { kind: "Name", value: "sdkInitialized" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const CreateReferralCodeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateReferralCode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateReferralCodeInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createReferralCode" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                { kind: "Field", name: { kind: "Name", value: "referralCode" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateReferralCodeMutation, CreateReferralCodeMutationVariables>;
export const DeleteEventDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteEvent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteEvent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "validationType" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>;
export const RefreshApiKeyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RefreshApiKey" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProductUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "refreshApiKey" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "productAuth" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "apiKey" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RefreshApiKeyMutation, RefreshApiKeyMutationVariables>;
export const RefreshTokensDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RefreshTokens" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "TokenInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "refreshTokens" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "accessToken" } },
                { kind: "Field", name: { kind: "Name", value: "refreshToken" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RequestLoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RequestLogin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UserInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "requestLogin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "nonce" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RequestLoginMutation, RequestLoginMutationVariables>;
export const SetIncentivePoolDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetIncentivePool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProductUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "setIncentivePool" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentivePool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "poolAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetIncentivePoolMutation, SetIncentivePoolMutationVariables>;
export const SetProductStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetProductStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProductUpdateInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "setProductStatus" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "webLink" } },
                { kind: "Field", name: { kind: "Name", value: "twitterLink" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "network" } },
                { kind: "Field", name: { kind: "Name", value: "sdkInitialized" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentivePool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "poolAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "events" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                      { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                      { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "validationType" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "incentiveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimal" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "eventLogValidation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                            { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                            { kind: "Field", name: { kind: "Name", value: "topics" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userReferrals" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "address" } },
                                  { kind: "Field", name: { kind: "Name", value: "role" } },
                                  { kind: "Field", name: { kind: "Name", value: "status" } },
                                  { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                            { kind: "Field", name: { kind: "Name", value: "claimed" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "updated" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetProductStatusMutation, SetProductStatusMutationVariables>;
export const UpsertEventDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertEvent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EventInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertEvent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "validationType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentiveToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "address" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "symbol" } },
                      { kind: "Field", name: { kind: "Name", value: "decimal" } },
                      { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                      { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                      { kind: "Field", name: { kind: "Name", value: "eventId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "eventLogValidation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "eventId" } },
                      { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                      { kind: "Field", name: { kind: "Name", value: "topics" } },
                      { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpsertEventMutation, UpsertEventMutationVariables>;
export const VerifyLoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "VerifyLogin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "VerifyUserInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "verifyLogin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "accessToken" } },
                { kind: "Field", name: { kind: "Name", value: "refreshToken" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyLoginMutation, VerifyLoginMutationVariables>;
export const FindAllReferralsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindAllReferrals" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findAllReferrals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userReferrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "role" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                            { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "referralId" } },
                      { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                      { kind: "Field", name: { kind: "Name", value: "claimed" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                { kind: "Field", name: { kind: "Name", value: "updated" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referralVerifiedEvents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "referralId" } },
                      { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "verifiedEvent" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "description" } },
                            { kind: "Field", name: { kind: "Name", value: "productId" } },
                            { kind: "Field", name: { kind: "Name", value: "type" } },
                            { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                            { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                            { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                            { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                            { kind: "Field", name: { kind: "Name", value: "validationType" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "incentiveToken" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "address" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "symbol" } },
                                  { kind: "Field", name: { kind: "Name", value: "decimal" } },
                                  { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                                  { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                                  { kind: "Field", name: { kind: "Name", value: "eventId" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindAllReferralsQuery, FindAllReferralsQueryVariables>;
export const FindEventByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindEventById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "eventId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findEventById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "eventId" },
                value: { kind: "Variable", name: { kind: "Name", value: "eventId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                { kind: "Field", name: { kind: "Name", value: "validationType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentiveToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "address" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "symbol" } },
                      { kind: "Field", name: { kind: "Name", value: "decimal" } },
                      { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                      { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                      { kind: "Field", name: { kind: "Name", value: "eventId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "eventLogValidation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "eventId" } },
                      { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                      { kind: "Field", name: { kind: "Name", value: "topics" } },
                      { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referralVerifiedEvents" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referral" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "userReferrals" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "user" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "address" } },
                                        { kind: "Field", name: { kind: "Name", value: "role" } },
                                        { kind: "Field", name: { kind: "Name", value: "status" } },
                                        { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "referralId" } },
                                  { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                                  { kind: "Field", name: { kind: "Name", value: "claimed" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "productId" } },
                            { kind: "Field", name: { kind: "Name", value: "updated" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "referralId" } },
                      { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindEventByIdQuery, FindEventByIdQueryVariables>;
export const FindProductByDomainDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindProductByDomain" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "domain" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findProductByDomain" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "domain" },
                value: { kind: "Variable", name: { kind: "Name", value: "domain" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "webLink" } },
                { kind: "Field", name: { kind: "Name", value: "twitterLink" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "network" } },
                { kind: "Field", name: { kind: "Name", value: "sdkInitialized" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentivePool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "poolAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "events" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                      { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                      { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "validationType" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "incentiveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimal" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "eventLogValidation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                            { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                            { kind: "Field", name: { kind: "Name", value: "topics" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referral" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "userReferrals" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "user" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "Field", name: { kind: "Name", value: "id" } },
                                              { kind: "Field", name: { kind: "Name", value: "address" } },
                                              { kind: "Field", name: { kind: "Name", value: "role" } },
                                              { kind: "Field", name: { kind: "Name", value: "status" } },
                                              { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                              { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                              { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                            ],
                                          },
                                        },
                                        { kind: "Field", name: { kind: "Name", value: "referralId" } },
                                        { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                                        { kind: "Field", name: { kind: "Name", value: "claimed" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "updated" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userReferrals" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "address" } },
                                  { kind: "Field", name: { kind: "Name", value: "role" } },
                                  { kind: "Field", name: { kind: "Name", value: "status" } },
                                  { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                            { kind: "Field", name: { kind: "Name", value: "claimed" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "updated" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "verifiedEvent" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "description" } },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "type" } },
                                  { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                                  { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                                  { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "validationType" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "incentiveToken" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "address" } },
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        { kind: "Field", name: { kind: "Name", value: "symbol" } },
                                        { kind: "Field", name: { kind: "Name", value: "decimal" } },
                                        { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "eventId" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindProductByDomainQuery, FindProductByDomainQueryVariables>;
export const FindProductByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindProductById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findProductById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "webLink" } },
                { kind: "Field", name: { kind: "Name", value: "twitterLink" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "network" } },
                { kind: "Field", name: { kind: "Name", value: "sdkInitialized" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentivePool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "poolAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "events" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                      { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                      { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "validationType" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "incentiveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimal" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "eventLogValidation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                            { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                            { kind: "Field", name: { kind: "Name", value: "topics" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referral" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "userReferrals" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "user" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "Field", name: { kind: "Name", value: "id" } },
                                              { kind: "Field", name: { kind: "Name", value: "address" } },
                                              { kind: "Field", name: { kind: "Name", value: "role" } },
                                              { kind: "Field", name: { kind: "Name", value: "status" } },
                                              { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                              { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                              { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                            ],
                                          },
                                        },
                                        { kind: "Field", name: { kind: "Name", value: "referralId" } },
                                        { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                                        { kind: "Field", name: { kind: "Name", value: "claimed" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "updated" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userReferrals" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "address" } },
                                  { kind: "Field", name: { kind: "Name", value: "role" } },
                                  { kind: "Field", name: { kind: "Name", value: "status" } },
                                  { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                            { kind: "Field", name: { kind: "Name", value: "claimed" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "updated" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "verifiedEvent" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "description" } },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "type" } },
                                  { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                                  { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                                  { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "validationType" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "incentiveToken" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "address" } },
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        { kind: "Field", name: { kind: "Name", value: "symbol" } },
                                        { kind: "Field", name: { kind: "Name", value: "decimal" } },
                                        { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "eventId" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindProductByIdQuery, FindProductByIdQueryVariables>;
export const FindProductsByUserAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindProductsByUserAddress" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findProductsByUserAddress" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                { kind: "Field", name: { kind: "Name", value: "webLink" } },
                { kind: "Field", name: { kind: "Name", value: "twitterLink" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "network" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "productAuth" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "apiKey" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "sdkInitialized" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incentivePool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "poolAddress" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "events" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                      { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                      { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                      { kind: "Field", name: { kind: "Name", value: "validationType" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "incentiveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimal" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "eventLogValidation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "eventId" } },
                            { kind: "Field", name: { kind: "Name", value: "contractAddress" } },
                            { kind: "Field", name: { kind: "Name", value: "eventAbi" } },
                            { kind: "Field", name: { kind: "Name", value: "topics" } },
                            { kind: "Field", name: { kind: "Name", value: "refereeArgs" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "referral" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "userReferrals" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "user" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "Field", name: { kind: "Name", value: "id" } },
                                              { kind: "Field", name: { kind: "Name", value: "address" } },
                                              { kind: "Field", name: { kind: "Name", value: "role" } },
                                              { kind: "Field", name: { kind: "Name", value: "status" } },
                                              { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                              { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                              { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                            ],
                                          },
                                        },
                                        { kind: "Field", name: { kind: "Name", value: "referralId" } },
                                        { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                                        { kind: "Field", name: { kind: "Name", value: "claimed" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "updated" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "referrals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userReferrals" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "userAddress" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "address" } },
                                  { kind: "Field", name: { kind: "Name", value: "role" } },
                                  { kind: "Field", name: { kind: "Name", value: "status" } },
                                  { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                                  { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                  { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "userReferralType" } },
                            { kind: "Field", name: { kind: "Name", value: "claimed" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "productId" } },
                      { kind: "Field", name: { kind: "Name", value: "updated" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "referralVerifiedEvents" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "referralId" } },
                            { kind: "Field", name: { kind: "Name", value: "verifiedEventId" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "verifiedEvent" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "description" } },
                                  { kind: "Field", name: { kind: "Name", value: "productId" } },
                                  { kind: "Field", name: { kind: "Name", value: "type" } },
                                  { kind: "Field", name: { kind: "Name", value: "totalEventNum" } },
                                  { kind: "Field", name: { kind: "Name", value: "maxRefereeLimitForReferrer" } },
                                  { kind: "Field", name: { kind: "Name", value: "startTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "endTimeStamp" } },
                                  { kind: "Field", name: { kind: "Name", value: "validationType" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "incentiveToken" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "address" } },
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                        { kind: "Field", name: { kind: "Name", value: "symbol" } },
                                        { kind: "Field", name: { kind: "Name", value: "decimal" } },
                                        { kind: "Field", name: { kind: "Name", value: "referrerAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "refereeAmountPerEvent" } },
                                        { kind: "Field", name: { kind: "Name", value: "eventId" } },
                                        { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                                        { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindProductsByUserAddressQuery, FindProductsByUserAddressQueryVariables>;
export const FindTestReferralsByProductIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindTestReferralsByProductId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "productId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findTestReferralsByProductId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "productId" },
                value: { kind: "Variable", name: { kind: "Name", value: "productId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "productId" } },
                { kind: "Field", name: { kind: "Name", value: "referrerAddress" } },
                { kind: "Field", name: { kind: "Name", value: "refereeAddress" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindTestReferralsByProductIdQuery, FindTestReferralsByProductIdQueryVariables>;
export const FindUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                { kind: "Field", name: { kind: "Name", value: "referralCode" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindUserQuery, FindUserQueryVariables>;
export const FindUserByAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FindUserByAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UserInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "findUserByAddress" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "twitterUserName" } },
                { kind: "Field", name: { kind: "Name", value: "referralCode" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindUserByAddressQuery, FindUserByAddressQueryVariables>;
