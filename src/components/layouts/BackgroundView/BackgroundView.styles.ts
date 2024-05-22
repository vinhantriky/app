import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 375 / 470,

    objectFit: 'contain',
  },
});
