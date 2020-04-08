export class ApiSetting {
  public static API_SERVER = 'http://127.0.0.1:8888';
  public static API_VERSION = '/v1';
  public static API_ENDPOINTS = {
    TX_SUMMARY : '/transactions',
    TX_LIST : '/transactions/list',
    BALANCE_SUMMARY : '/balances/summary/stakevsrewards',
    HISTORY_UPDATE_SUMMARY : '/histories/update-summary',
    POOL_USER_REGISTRATION: '/pool/user/add',
  };

  public static resolveEndpoint(uri: string): string {
    return ApiSetting.API_SERVER + ApiSetting.API_VERSION + ApiSetting.API_ENDPOINTS[uri];
  }
}
