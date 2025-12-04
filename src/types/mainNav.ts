import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  HomeScreen: undefined;
  LevelsScreen: undefined;
  GameScreen: { level: number };
  SettingsScreen: undefined;
  FactsScreen: undefined;
  ShopScreen: undefined;
  AboutScreen: undefined;
};

export type MainStackParamListNavigationProps =
  NativeStackNavigationProp<MainStackParamList>;
