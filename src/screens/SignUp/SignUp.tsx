import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '#/theme';

import {useSignUpViewController} from '#/hooks';

import {BackgroundView, Checkbox, FormInput, Icon} from '#/components';

import images from '#/assets/images';

import {styles} from './SignUp.styles';

export default function SignIn() {
  const {
    texts: {
      labelCheckbox,
      labelEmail,
      labelPassword,
      linkContent,
      signUpDescription,
      signUpTitle,
    },

    isChecked,
    isCanNotSubmit,

    loading,

    control,
    handleSubmit,

    handleCheck,
    handleGoBack,
    handlePrivacyPolicy,
    handleSignUp,
    handleTermOfService,

    submitButtonStyle,
  } = useSignUpViewController();

  return (
    <BackgroundView
      loading={loading}
      style={styles.container}
      image={images.BG_SIGNUP}
      locations={[0.1, 0.51]}
      background={theme.colorBlack}>
      <TouchableOpacity onPress={handleGoBack} style={styles.iconWrapper}>
        <Icon name="back" color="#ffffff" size={8} />
      </TouchableOpacity>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingWrapper}>
        <Text style={styles.text1}>{signUpDescription}</Text>
        <View style={styles.textInputWrapper}>
          <FormInput
            type="email"
            name="email"
            control={control}
            label={labelEmail}
          />
          <FormInput
            type="password"
            name="password"
            control={control}
            label={labelPassword}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.formWrapper}>
        <Checkbox
          isChecked={isChecked}
          title={labelCheckbox}
          onCheck={handleCheck}
        />
        <Text style={styles.text2}>
          {linkContent}
          <Text onPress={handleTermOfService} style={styles.text3}>
            {' Terms of Service'}
          </Text>
          {' and '}
          <Text onPress={handlePrivacyPolicy} style={styles.text3}>
            Privacy Policy
          </Text>
        </Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.text4}>{signUpTitle}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={isCanNotSubmit}
            style={submitButtonStyle}
            onPress={handleSubmit(handleSignUp)}>
            <Icon name="next" size={54} color={theme.colorTransparent} />
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundView>
  );
}
