import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const decodeToken = token => {
  return jwtDecode(token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const setToken = async token => {
  await AsyncStorage.setItem('token', token);
};
