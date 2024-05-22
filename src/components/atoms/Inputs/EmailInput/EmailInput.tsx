import React from 'react';
import {Text, View} from 'react-native';

import {useController} from 'react-hook-form';
import {TextInput as RTNPTextInput} from 'react-native-paper';

import {TextInputDefaultProps} from '#/constants';

import {styles} from './EmailInput.styles';

type Props = {
  label: string;
  control: any;
  name: string;
};
export default function EmailInput({name, control, label}: Props) {
  const {
    field: {value, onChange},
    fieldState: {error, invalid},
  } = useController({
    name,
    control,
  });

  return (
    <View>
      <RTNPTextInput
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        inputMode="email"
        label={label}
        {...TextInputDefaultProps}
      />
      {invalid && <Text style={styles.errorText}>{error?.message}</Text>}
    </View>
  );
}
