export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ResponseCode {
  SUCCESS = 0,
  CREATED = 201,

  // 通用錯誤碼
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_ERROR = 500,

  // 業務自訂錯誤碼 - 權限與帳號 (1000+)
  AUTH_UNAUTHORIZED = 1003,
  AUTH_INVALID_CREDENTIALS = 1004,
  AUTH_USER_NOT_FOUND = 1005,

  // 業務自訂錯誤碼 - 餐廳點餐與菜單 (2000+)
  CATEGORY_HAS_ITEMS = 2000,
  TABLE_NOT_FOUND = 2002,
  ORDER_CART_EMPTY = 2003,
  ORDER_ALREADY_PAID = 2005,
  ORDER_TAKEOUT_PHONE_REQUIRED = 2006,
  MENU_ITEM_INVALID_PARAMS = 2008,
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  code: ResponseCode;
  message: string;
  data: T;
}
