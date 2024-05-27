export interface Role {
  id: number;
  name: string;
  description: string;
}

// OR role can be enum
export enum RoleEnum {
  ADMIN = 'ADMIN',
  INSTRUCTOR = 'INSTRUCTOR',
  STUDENT = 'STUDENT'
}