export interface CreateTableDTO {
  code: string;
  name: string;
  capacity?: number;
}

export interface UpdateTableDTO {
  code?: string;
  name?: string;
  capacity?: number;
  isActive?: boolean;
}
