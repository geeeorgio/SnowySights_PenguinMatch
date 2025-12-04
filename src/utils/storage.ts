import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ImageSourcePropType } from 'react-native';

export const saveBackgroundToStorage = async (source: ImageSourcePropType) => {
  try {
    const jsonValue = JSON.stringify(source);
    await AsyncStorage.setItem('game_background', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getBackgroundFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('game_background');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
