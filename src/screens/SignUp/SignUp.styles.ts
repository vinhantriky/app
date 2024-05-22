import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',

    paddingHorizontal: theme.space24,
    paddingTop: theme.space12,
    paddingBottom: 20,
  },

  keyboardAvoidingWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: theme.space30,
    // backgroundColor: 'red',
  },

  formWrapper: {
    justifyContent: 'flex-end',
    gap: theme.space30,
  },

  iconWrapper: {
    padding: theme.space24,
    marginLeft: -theme.space24,
    marginTop: -theme.space24,
  },

  text1: {
    color: theme.colorWhite,
    fontSize: theme.fontSize22,
    fontFamily: theme.fontFamily,
  },
  text2: {
    color: theme.colorWhiteHalf,
    fontSize: theme.fontSize12,
    fontFamily: theme.fontFamily,
  },
  text3: {
    color: theme.colorPurple,
  },
  text4: {
    color: theme.colorWhite,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize16,
  },
  textInputWrapper: {
    paddingBottom: 32,
    gap: theme.space16,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
