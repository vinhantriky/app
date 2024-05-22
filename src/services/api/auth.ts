import {ErrorPayload} from '#/types/error';
import {SignInRequestPayload, SignInResponsePayload} from '#/types/signIn';
import {SignUpRequestPayload, SignUpResponsePayload} from '#/types/signUp';

import {APIConfig} from '../config';

const PRE_URL = '/auth';

export async function signIn(params: SignInRequestPayload) {
  const url = `${PRE_URL}/signin`;

  const requestData: SignInRequestPayload = {
    email: params.email ?? '',
    password: params.password ?? '',
  };

  const {ok, data} = await APIConfig.post<SignInResponsePayload, ErrorPayload>(
    url,
    requestData,
  );

  if (ok) {
    const responseData: SignInResponsePayload = {
      accessToken: data?.accessToken ?? '',
      refreshToken: data?.refreshToken ?? '',
      user: {
        email: data?.user.email ?? '',
        firstName: data?.user.firstName ?? '',
        lastName: data?.user.lastName ?? '',
        id: data?.user.id ?? '',
      },
    };
    return responseData;
  } else {
    throw new Error(data?.message);
  }
}

export async function signUp(params: SignUpRequestPayload) {
  const url = `${PRE_URL}/signup`;

  const requestData: SignUpRequestPayload = {
    email: params.email ?? '',
    password: params.password ?? '',
    firstName: params.firstName ?? '',
    lastName: params.lastName ?? '',
  };
  const response = await APIConfig.post<SignUpResponsePayload, ErrorPayload>(
    url,
    requestData,
  );
  const {ok, data} = response;
  if (ok) {
    const responseData: SignUpResponsePayload = {
      createdAt: data?.createdAt ?? '',
      email: data?.email ?? '',
      firstName: data?.firstName ?? '',
      id: data?.id ?? -1,
      lastName: data?.lastName ?? '',
      role: data?.role ?? 'USER',
      updatedAt: data?.updatedAt ?? '',
    };
    return responseData;
  } else {
    throw new Error(response?.data?.message);
  }
}
