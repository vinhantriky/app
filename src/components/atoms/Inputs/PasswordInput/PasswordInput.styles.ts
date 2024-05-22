import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  password: {
    paddingRight: 25,
  },
  eyeWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    height: 35,
    width: 45,

    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  passwordText: {
    color: theme.colorWhiteHalf,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize14,
    paddingTop: 5,
    alignSelf: 'flex-end',
  },
});
