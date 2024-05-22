import {RootState} from '#/store/config';

export const selectUser = ({signIn}: RootState) => signIn.user;
export const signInLoading = ({signIn}: RootState) => signIn.loading;
export const signInError = ({signIn}: RootState) => signIn.error;
