import {useSelector} from 'react-redux';

import {SignUpRequestPayload} from '#/types/signUp';

import {useAppDispatch} from '#/store/config';
import {signUpError, signUpLoading, signUpUserThunk} from '#/store/reducers';

export function useSignUpViewModel() {
  const dispatch = useAppDispatch();

  const loading = useSelector(signUpLoading);
  const error = useSelector(signUpError);

  function dispatchSignUpUser(params: SignUpRequestPayload) {
    console.log('sign up');
    dispatch(signUpUserThunk(params));
  }

  return {
    loading,
    error,
    dispatchSignUpUser,
  };
}
