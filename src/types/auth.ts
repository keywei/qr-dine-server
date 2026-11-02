export interface AuthUser {
  id: number;
  username: string;
  name: string;
  role: string;
}

export interface LoginDTO {
  username?: string;
  password?: string;
}
