import AsyncStorage from '@react-native-async-storage/async-storage';

import {CategoryPayload} from '#/types/categories';

export const storeAccessToken = async (value: string) => {
  console.log('token acccessToken', value);
  await AsyncStorage.setItem('accessToken', value);
};
export const getAccessToken = async () => {
  const value = await AsyncStorage.getItem('accessToken');
  if (value !== null) {
    return value;
  }
};

export const storeRefreshToken = async (value: string) => {
  await AsyncStorage.setItem('refreshToken', value);
};
export const getRefreshToken = async () => {
  const value = await AsyncStorage.getItem('refreshToken');
  if (value !== null) {
    return value;
  }
};

export const storeCategories = async (value: CategoryPayload[]) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('categories', jsonValue);
};
export const getCategories = async (): Promise<CategoryPayload[] | null> => {
  const jsonValue = await AsyncStorage.getItem('categories');
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
