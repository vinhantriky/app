import {RootState} from '#/store/config';

export const selectResponse = ({signUp}: RootState) => signUp.response;
export const signUpLoading = ({signUp}: RootState) => signUp.loading;
export const signUpError = ({signUp}: RootState) => signUp.error;
