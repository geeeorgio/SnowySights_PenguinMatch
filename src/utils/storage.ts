import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ImageSourcePropType } from 'react-native';

import type { GameLevel, ShopBackground } from 'src/constants';
import { GAME_LEVELS, SHOP_BACKGROUNDS } from 'src/constants';

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

export const setOnboardingToStore = async (completed: boolean) => {
  try {
    const jsonValue = JSON.stringify(completed);
    await AsyncStorage.setItem('onboarding_completed', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getOnboardingFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('onboarding_completed');
    return value !== null ? JSON.parse(value) : false;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getScoreFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('score');
    return value !== null ? JSON.parse(value) : 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
};

export const setScoreToStore = async (finalScore: number) => {
  try {
    const jsonValue = JSON.stringify(finalScore);
    await AsyncStorage.setItem('score', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const setMusicEnabledToStore = async (enabled: boolean) => {
  try {
    const jsonValue = JSON.stringify(enabled);
    await AsyncStorage.setItem('music', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getMusicEnabledFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('music');
    return value !== null ? JSON.parse(value) : true;
  } catch (e) {
    console.error(e);
    return true;
  }
};

export const setSoundEnabledToStore = async (enabled: boolean) => {
  try {
    const jsonValue = JSON.stringify(enabled);
    await AsyncStorage.setItem('sound', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getSoundEnabledFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('sound');
    return value !== null ? JSON.parse(value) : true;
  } catch (e) {
    console.error(e);
    return true;
  }
};

export const getShopActualBackgroundsFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('shop_backgrounds');
    return value !== null ? JSON.parse(value) : SHOP_BACKGROUNDS;
  } catch (e) {
    console.error(e);
    return SHOP_BACKGROUNDS;
  }
};

export const setShopBackgroundsToStore = async (
  backgrounds: ShopBackground[],
) => {
  try {
    const jsonValue = JSON.stringify(backgrounds);
    await AsyncStorage.setItem('shop_backgrounds', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getLevelsFromStore = async () => {
  try {
    const value = await AsyncStorage.getItem('levels');
    return value !== null ? JSON.parse(value) : GAME_LEVELS;
  } catch (e) {
    console.error(e);
    return GAME_LEVELS;
  }
};

export const setLevelsToStore = async (levels: GameLevel[]) => {
  try {
    const jsonValue = JSON.stringify(levels);
    await AsyncStorage.setItem('level', jsonValue);
  } catch (e) {
    console.error(e);
  }
};
