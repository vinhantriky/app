import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import theme from '#/theme';

import Icon from '../Icon/Icon';
import {styles} from './Checkbox.styles';

type Props = {
  title: string;
  isChecked: boolean;
  onCheck: () => void;
};

export default function Checkbox({title, isChecked, onCheck}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.checkboxWrapper}
        onPress={onCheck}>
        <Icon
          name={isChecked ? 'checked' : 'no-checked'}
          color={theme.colorPurple}
          size={22}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
