export type QueueStatus = 'WAITING' | 'CALLING' | 'SEATED' | 'CANCELLED' | 'EXPIRED';

export interface CreateQueueTicketDTO {
  customerPhone: string;
  partySize?: number;
}

export interface QueueTicketDetail {
  id: number;
  ticketNo: number;
  customerPhone: string;
  partySize: number;
  status: string;
  callCount: number;
  calledAt: Date | null;
  seatedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  currentCallingNo: number | null;
  waitingCount: number;
  maxCallCount: number;
}

export interface AdminQueueStats {
  waitingCount: number;
  callingCount: number;
  seatedCount: number;
  currentCallingNo: number | null;
}
