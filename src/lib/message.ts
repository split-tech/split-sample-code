export const ErrorMessage = {
  /* 서버 사용 메시지 */
  // 공통
  MSG_INVALID_NETWORK: 'Network is not supported by Split.',

  // 사용자 로그인 관련
  MSG_INVALID_USER_INPUT: 'Invalid User Input',
  MSG_NOT_FOUND_USER: 'User not found',
  MSG_INVALID_SIGNATURE: 'Invalid Signature',
  MSG_INVALID_TOKEN: 'Invalid Token',
  MSG_INVALID_TOKEN_INPUT: 'Invalid Token Input',

  // 인증 관련
  MSG_TOKEN_EXPIRED: 'Auth token expired',
  MSG_UNAUTHORIZED: 'Unauthorized',
  MSG_INVALID_API_KEY: 'Invalid API Key',
  MSG_DUPLICATED_TWITTER_NAME: 'Duplicated Twitter Name',

  // 제품 관련
  MSG_NOT_FOUND_PRODUCT: 'Product not found',
  MSG_DUPLICATED_PRODUCT_DOMAIN: 'Product name is already in use.',
  MSG_NOT_FOUND_INCENTIVE_POOL: 'Incentive pool not found',
  MSG_INVALID_STATUS: 'Invalid product status',
  MSG_NOT_INSTALLED_SDK: 'SDK not installed',

  // 이벤트 관련
  MSG_NOT_FOUND_EVENT: 'Event not found',
  MSG_INVALID_EVENT_INPUT: 'Invalid Event Input',
  MSG_INVALID_INCENTIVE_TOKEN_INPUT: 'Invalid transaction input',
  MSG_INVALID_EVENT_VALIDATION_TYPE: 'Invalid event validation type',
  MSG_INVALID_EVENT_LOG_VALIDATION_INPUT: 'Invalid event log validation input',

  // 레퍼럴 관련
  MSG_DUPLICATE_REFERRAL: 'Duplicated referral',
  MSG_INVALID_REFERRER: 'Invalid referrer address',
  MSG_REFERRAL_UPDATE_FAILED: 'Referral update failed',

  // 검증 관련
  MSG_INVALID_ABI: 'Invalid ABI',

  // 슬랙 메시지 관련
  MSG_SLACK_SEND_FAILED: 'Failed to send slack message',

  /* 클라이언트 사용 메시지 */
  MSG_INVALID_WALLET_INSTANCE: 'Failed to get wallet instance',
  MSG_DATA_NOT_UPSERTED: 'Data not upserted in database',
  MSG_FAILED_TO_PROCESS_TX: 'Failed to process transaction',
  MSG_POOL_ALREADY_EXIST: 'Pool already exists',
};
