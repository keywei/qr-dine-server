export interface CreateOptionDTO {
  name: string;
  extraPrice?: number;
}

export interface CreateOptionGroupDTO {
  title: string;
  type?: 'SINGLE' | 'MULTIPLE';
  isRequired?: boolean;
  options?: CreateOptionDTO[];
}

export interface CreateMenuItemDTO {
  categoryId: number;
  name: string;
  description?: string | null;
  price: number;
  imageUrl?: string | null;
  isAvailable?: boolean;
  sortOrder?: number;
  options?: CreateOptionGroupDTO[];
}

export type UpdateMenuItemDTO = Partial<CreateMenuItemDTO>;
