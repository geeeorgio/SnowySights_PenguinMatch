import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { GameLevel } from 'src/constants';

export type MainStackParamList = {
  HomeScreen: undefined;
  LevelsScreen: undefined;
  GameScreen: { level: GameLevel };
  SettingsScreen: undefined;
  FactsScreen: undefined;
  ShopScreen: undefined;
  AboutScreen: undefined;
};

export type MainStackParamListNavigationProps =
  NativeStackNavigationProp<MainStackParamList>;
