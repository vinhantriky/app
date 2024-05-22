import {RoleUserType} from './role';

export type SignUpRequestPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type SignUpResponsePayload = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: RoleUserType;
};
