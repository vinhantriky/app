import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

import {SignUpRequestPayload} from '#/types/signUp';

import {useSignUpViewModel} from '../ViewModel';

const signUpDescription = 'Let’s get you started!';
const labelEmail = 'Your email';
const labelPassword = 'Your password';
const labelCheckbox = 'I am over 16 years of age';
const linkContent =
  'By clicking Sign Up, you are indicating that you have read and agree to the';
const signUpTitle = 'Sign Up';

const schema = z.object({
  email: z
    .string()
    .min(1, {message: 'Email is required'})
    .email('Email is not valid'),
  password: z.string().min(6).max(18),
});

export function useSignUpViewController() {
  const {error, loading, dispatchSignUpUser} = useSignUpViewModel();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<{email: string; password: string}>({
    defaultValues: {
      email: 'vinhan.dev@gmail.com',
      password: '1234567',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const [isChecked, setChecked] = useState(true);

  function handleGoBack() {
    Alert.alert('Not available');
  }
  function handleTermOfService() {
    Alert.alert('Not available');
  }
  function handlePrivacyPolicy() {
    Alert.alert('Not available');
  }

  function handleCheck() {
    setChecked(!isChecked);
  }

  function handleSignUp({email, password}: {email: string; password: string}) {
    if (!email && !password) {
      return null;
    }
    const signUpParams: SignUpRequestPayload = {
      email,
      password,
      firstName: 'Tester',
      lastName: 'Mr',
    };
    dispatchSignUpUser(signUpParams);
  }

  const isCanNotSubmit = !isValid || !isChecked;

  const submitButtonStyle = {
    opacity: isCanNotSubmit ? 0.5 : 1,
  };

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);

  return {
    texts: {
      signUpDescription,
      signUpTitle,
      labelCheckbox,
      labelEmail,
      labelPassword,
      linkContent,
    },
    isChecked,
    isCanNotSubmit,
    loading,
    error,
    handleCheck,
    handleGoBack,
    handlePrivacyPolicy,
    handleTermOfService,
    handleSignUp,
    handleSubmit,
    control,
    submitButtonStyle,
  };
}
