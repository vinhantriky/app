import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  itemSizeWrapper: {
    width: '31.5%',
    height: 70,
  },
  itemWrapper: {
    height: 70,
    borderWidth: 1,
    padding: 10,
    borderRadius: theme.borderRadius8,
    borderColor: theme.colorWhiteHalf12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: theme.fontSize14,
    color: theme.colorWhite,
    fontFamily: theme.fontFamily,

    textAlign: 'center',
  },
});
