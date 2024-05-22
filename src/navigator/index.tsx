import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {selectUser} from '#/store/reducers';

import {SignUp, Welcome} from '#/screens';

import {MainStackParamList} from './helper';

const Stack = createStackNavigator<MainStackParamList>();

function MainNavigator() {
  const user = useSelector(selectUser);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <Stack.Screen name={'Welcome'} component={Welcome} />
      ) : (
        <Stack.Screen name={'SignUp'} component={SignUp} />
      )}
    </Stack.Navigator>
  );
}

export default MainNavigator;
