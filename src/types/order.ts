export type OrderStatus = 'PENDING_PAYMENT' | 'COOKING' | 'COMPLETED' | 'CANCELLED';
export type PaymentStatus = 'UNPAID' | 'PAID' | 'REFUNDED';
export type PaymentMethod = 'CASH' | 'LINE_PAY' | 'CREDIT_CARD' | 'ONLINE';
export type DiningType = 'DINE_IN' | 'TAKEOUT';

export interface CreateOrderItemDTO {
  menuItemId?: number | null;
  name: string;
  price: number;
  quantity?: number;
  optionsText?: string | null;
  options?: string[];
}

export interface CreateOrderDTO {
  diningType: DiningType;
  tableCode?: string;
  customerNote?: string | null;
  customerPhone?: string | null;
  taxId?: string | null;
  invoiceCarrier?: string | null;
  paymentMethod: PaymentMethod;
  items: CreateOrderItemDTO[];
}

export interface OrderFilterQuery {
  status?: string;
  diningType?: string;
  search?: string;
  limit?: string;
}
