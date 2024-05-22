import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  errorText: {
    position: 'absolute',
    bottom: -theme.space24,
    color: theme.colorRed,
    fontSize: theme.fontSize14,
    fontFamily: theme.fontFamily,
    alignSelf: 'flex-end',
  },
});
