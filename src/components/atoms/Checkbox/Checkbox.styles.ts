import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    height: 44,
    justifyContent: 'center',
  },
  checkboxWrapper: {
    padding: 22,
    position: 'absolute',
    left: -22,
    top: -11,
  },
  title: {
    color: theme.colorWhite,
    fontSize: theme.fontSize14,
    fontFamily: theme.fontFamily,
  },
});
