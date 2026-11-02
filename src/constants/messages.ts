export const MESSAGES = {
  // 通用
  SUCCESS: '操作成功',
  FAILED: '操作失敗',
  INTERNAL_ERROR: '伺服器內部發生錯誤，工程師搶修中',

  // 帳號認證
  AUTH: {
    LOGIN_SUCCESS: '登入成功',
    REQUIRED_CREDENTIALS: '請輸入帳號與密碼',
    INVALID_CREDENTIALS: '帳號或密碼錯誤',
    UNAUTHORIZED: '未授權，請先登入',
    INVALID_TOKEN: '憑證無效或 Token 已過期',
    USER_NOT_FOUND: '找不到使用者資訊',
  },

  // 菜單分類
  CATEGORY: {
    CREATED: '分類建立成功',
    UPDATED: '分類更新成功',
    DELETED: '分類已刪除',
    NAME_REQUIRED: '分類名稱為必填項',
    HAS_ITEMS_CANNOT_DELETE: '此分類下仍有餐點，無法直接刪除',
  },

  // 餐點品項
  MENU: {
    CREATED: '餐點新增成功',
    UPDATED: '餐點更新成功',
    STATUS_UPDATED: '狀態更新成功',
    DELETED: '餐點已刪除',
    NOT_FOUND: '找不到此餐點',
    INVALID_PARAMS: '分類、餐點品名與價格為必填項',
  },

  // 桌號管理
  TABLE: {
    CREATED: '桌號新增成功',
    UPDATED: '桌號更新成功',
    DELETED: '桌號已刪除',
    REQUIRED_FIELDS: '請填寫桌號代碼與名稱',
    ALREADY_EXISTS: (code: string) => `桌號 ${code} 已存在`,
    NOT_FOUND: '找不到此桌號',
    TAKEOUT_NAME: '外帶點餐 QR Code',
  },

  // 訂單管理
  ORDER: {
    CREATED: '訂單已建立',
    CASH_PAYMENT_CONFIRMED: '已確認收款，訂單轉入製作中',
    STATUS_UPDATED: (status: string) => `訂單狀態已更新為: ${status}`,
    CART_EMPTY: '購物車餐點明細為空，無法送出訂單',
    DINE_IN_TABLE_REQUIRED: '內用點餐請提供桌號代碼',
    TABLE_NOT_FOUND: (code: string) => `桌號不存在: ${code}`,
    TAKEOUT_PHONE_REQUIRED: '外帶顧客請務必提供聯絡電話',
    NOT_FOUND: '找不到此訂單',
    ALREADY_PAID: '此訂單已完成付款，無法重複確認',
    INVALID_STATUS: (status: string) => `無效的訂單狀態: ${status}`,
  },

  // 支付模組
  PAYMENT: {
    ORDER_NO_REQUIRED: '請提供訂單編號',
    ALREADY_PAID: '此訂單已完成付款，無法重複付款',
    MOCK_SUCCESS: (method: string) => `模擬付款成功 (${method})，訂單已送往廚房製作`,
  },

  // 檔案上傳
  UPLOAD: {
    SUCCESS: '圖片上傳成功',
    FILE_REQUIRED: '未接收到圖片檔案',
    INVALID_FORMAT: '只允許上傳 JPEG, PNG, WEBP, GIF 格式圖片',
  },

  // 門市設定
  STORE: {
    UPDATED: '門市資訊更新成功',
  },
} as const;

