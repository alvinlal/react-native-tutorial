import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key);
};

export const setItem = async (key: string, value: string): Promise<void> => {
  return await AsyncStorage.setItem(key, value);
};
