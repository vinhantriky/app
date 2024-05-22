import theme from '#/theme';

export const TextInputDefaultProps = {
  style: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    fontSize: theme.fontSize12,
    fontFamily: theme.fontFamily,
  },
  mode: 'flat',
  outlineColor: theme.colorTransparent,
  activeOutlineColor: theme.colorTransparent,
  underlineStyle: {
    backgroundColor: theme.colorPurple,
  },
  contentStyle: {
    fontSize: theme.fontSize16,
    fontFamily: theme.fontFamily,
    color: theme.colorWhite,
  },
  theme: {
    colors: {
      primary: theme.colorWhiteHalf,
    },
  },
} as const;
