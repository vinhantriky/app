import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {CategoryPayload} from '#/types/categories';

import {styles} from './CategoryButton.styles';

type Props = {
  item: CategoryPayload;
  isSelected: boolean;
  onSelectCategory: () => void;
};
export default function CategoryButton({
  isSelected,
  item,
  onSelectCategory,
}: Props) {
  if (isSelected) {
    return (
      <TouchableOpacity
        style={styles.itemSizeWrapper}
        onPress={onSelectCategory}>
        <LinearGradient
          style={styles.itemWrapper}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          colors={['#8A00FF', '#8A32A9']}>
          <Text style={styles.itemText}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.itemSizeWrapper, styles.itemWrapper]}
      onPress={onSelectCategory}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
}
