export type ServiceCallType = 'WATER' | 'UTENSILS' | 'CLEAN' | 'ASSIST' | 'OTHER';
export type ServiceCallStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

export interface ServiceCallDTO {
  tableCode: string;
  type: ServiceCallType;
  note?: string;
}

export interface ServiceBellStatusResponse {
  globalEnabled: boolean;
  tableEnabled: boolean;
  cooldownSeconds?: number;
}

