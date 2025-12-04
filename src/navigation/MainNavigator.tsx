import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AboutScreen,
  FactsScreen,
  GameScreen,
  HomeScreen,
  LevelsScreen,
  SettingsScreen,
  ShopScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="LevelsScreen" component={LevelsScreen} />
      <MainStack.Screen name="GameScreen" component={GameScreen} />
      <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <MainStack.Screen name="FactsScreen" component={FactsScreen} />
      <MainStack.Screen name="ShopScreen" component={ShopScreen} />
      <MainStack.Screen name="AboutScreen" component={AboutScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
