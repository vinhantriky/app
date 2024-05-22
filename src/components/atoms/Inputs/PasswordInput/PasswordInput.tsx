import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';

import {useController} from 'react-hook-form';
import {TextInput as RTNPTextInput} from 'react-native-paper';

import theme from '#/theme';

import {TextInputDefaultProps} from '#/constants';

import {checkPassword} from '#/utils';

import Icon from '../../Icon/Icon';
import {styles} from './PasswordInput.styles';

type Props = {
  label: string;
  control: any;
  name: string;
};

const maxStatusLength = Dimensions.get('window').width - theme.space24 * 2;

export default function PasswordInput({name, control, label}: Props) {
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    field: {value, onChange},
    fieldState: {isDirty},
  } = useController({
    name,
    control,
  });

  function handleTriggerShowPassword() {
    setShowPassword(!isShowPassword);
  }

  const {color, passwordText, progress} = checkPassword(value);

  const passwordBar = {
    position: 'absolute',
    bottom: 22,
    height: 2,
    width: maxStatusLength * progress,
    backgroundColor: color,
    zIndex: 3,
  } as const;

  const passwordColor = {
    color,
  };

  return (
    <View>
      <View>
        <RTNPTextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={!isShowPassword}
          label={label}
          {...TextInputDefaultProps}
          style={[styles.password, TextInputDefaultProps.style]}
          underlineStyle={{
            backgroundColor: isDirty ? theme.colorWhiteHalf : theme.colorPurple,
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleTriggerShowPassword}
          style={styles.eyeWrapper}>
          <Icon
            name="eye"
            color={isShowPassword ? theme.colorWhite : theme.colorWhiteHalf}
            size={19}
          />
        </TouchableOpacity>
      </View>
      <View style={passwordBar} />
      <Text style={[styles.passwordText, passwordColor]}>{passwordText}</Text>
    </View>
  );
}
