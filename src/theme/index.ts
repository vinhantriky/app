import {Platform} from 'react-native';

export default {
  colorWhite: '#FFFFFF',
  colorWhiteHalf: 'rgba(255,255,255, 0.5)',
  colorWhiteHalf12: 'rgba(255,255,255, 0.12)',
  colorBlack: '#000000',
  colorPurple: '#647FFF',
  colorRed: '#E05151',
  colorYellow: '#E3A063',
  colorGreen: '#91E2B7',

  colorTransparent: '#00000000',
  darkActiveContent: 'rgba(255,255,255, 0.3)',

  lightActiveContent: 'rgba(0,0,0, 0.1)',

  space4: 4,
  space8: 8,
  space12: 12,
  space16: 16,
  space24: 24,
  space30: 30,

  fontSize12: 12,
  fontSize14: 14,
  fontSize16: 16,
  fontSize22: 22,

  fontFamilyLight: 'Lato-Light',
  fontFamilyLightItalic: 'Lato-LightItalic',
  fontFamily: 'Lato-Regular',
  fontFamilyItalic: 'Lato-Italic',
  fontFamilyBold: 'Lato-Bold',
  fontFamilyBoldItalic: 'Lato-BoldItalic',

  borderRadius8: 8,

  dropShadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#adb5bd',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      default: {},
    }),
  },
};
