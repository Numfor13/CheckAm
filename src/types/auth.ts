export type UserRole = "REVIEWER" | "BUSINESS";

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  role: UserRole;
  token: string;
}

export interface AuthResponse {
  success:boolean;
  data: User;
}