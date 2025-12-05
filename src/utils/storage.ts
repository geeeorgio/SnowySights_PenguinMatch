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

export const setOnboardingCompleted = async (completed: boolean) => {
  try {
    const jsonValue = JSON.stringify(completed);
    await AsyncStorage.setItem('onboarding_completed', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getOnboardingCompleted = async () => {
  try {
    const value = await AsyncStorage.getItem('onboarding_completed');
    return value !== null ? JSON.parse(value) : false;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getScore = async () => {
  try {
    const value = await AsyncStorage.getItem('score');
    return value !== null ? JSON.parse(value) : 0;
  } catch (e) {
    console.error(e);
    return 0;
  }
};

export const setScore = async (finalScore: number) => {
  try {
    const jsonValue = JSON.stringify(finalScore);
    await AsyncStorage.setItem('score', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const setMusicEnabled = async (enabled: boolean) => {
  try {
    const jsonValue = JSON.stringify(enabled);
    await AsyncStorage.setItem('music', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getMusicEnabled = async () => {
  try {
    const value = await AsyncStorage.getItem('music');
    return value !== null ? JSON.parse(value) : true;
  } catch (e) {
    console.error(e);
    return true;
  }
};

export const setSoundEnabled = async (enabled: boolean) => {
  try {
    const jsonValue = JSON.stringify(enabled);
    await AsyncStorage.setItem('sound', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getSoundEnabled = async () => {
  try {
    const value = await AsyncStorage.getItem('sound');
    return value !== null ? JSON.parse(value) : true;
  } catch (e) {
    console.error(e);
    return true;
  }
};
