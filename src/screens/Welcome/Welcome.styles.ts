import {StyleSheet} from 'react-native';

import theme from '#/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.space24,
  },
  headerWrapper: {
    gap: theme.space12,
    paddingBottom: theme.space12,
  },
  headerRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 120,
  },
  backButton: {
    padding: 20,
    marginTop: -20,
    marginLeft: -20,
  },
  nextButton: {
    padding: 20,
    marginTop: -20,
    marginRight: -20,
  },
  nextText: {
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.fontSize14,
  },
  listContainer: {
    gap: theme.space12,
    justifyContent: 'space-between',
  },
  columnWrapper: {
    gap: 8,
  },

  title: {
    fontSize: theme.fontSize22,
    color: theme.colorWhite,
    fontFamily: theme.fontFamily,
  },
  description: {
    fontSize: theme.fontSize14,
    color: theme.colorWhite,
    fontFamily: theme.fontFamily,
  },
});
