import {UserPayload} from './user';

export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInResponsePayload = {
  user: UserPayload;
  accessToken: string;
  refreshToken: string;
};
