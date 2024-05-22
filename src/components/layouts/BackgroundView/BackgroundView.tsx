import React from 'react';
import {Image, ImageProps, View, ViewProps} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {LoadingView} from '#/components/molecules';

import {styles} from './BackgroundView.styles';

type Props = ViewProps & {
  image: ImageProps;
  background: string;
  locations: number[];
  loading: boolean;
};
export default function BackgroundView({
  image,
  background,
  locations,
  children,
  loading,
  ...props
}: Props) {
  const backgroundStyle = {
    backgroundColor: background,
  };

  const {width, height} = Image.resolveAssetSource(image);

  if (loading) {
    return <LoadingView />;
  }

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.backgroundWrapper}>
        <Image
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: width / height,
            objectFit: 'contain',
          }}
          source={image}
        />
      </View>
      <LinearGradient
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={locations}
        colors={['#1D223825', '#000000']}>
        <SafeAreaView {...props}>{children}</SafeAreaView>
      </LinearGradient>
    </View>
  );
}
