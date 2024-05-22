import {View} from 'react-native';

import {ActivityIndicator} from 'react-native-paper';

import {styles} from './LoadingView.styles';

export default function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} />
    </View>
  );
}
