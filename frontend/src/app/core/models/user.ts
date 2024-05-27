import { Role } from "./role";

export interface User extends Auth {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  imageUrl: string;
  registeredAt: string;
  updatedAt: string;
  role: Role;
}

export interface Auth {
  email: string;
  password: string;
  token: string;
}