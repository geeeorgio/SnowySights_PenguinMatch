import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CustomHeader } from 'src/components';
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
        header: (props) => <CustomHeader props={props} />,
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen
        name="LevelsScreen"
        component={LevelsScreen}
        options={{
          title: 'LEVELS',
        }}
      />
      <MainStack.Screen name="GameScreen" component={GameScreen} />
      <MainStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'SETTINGS',
        }}
      />
      <MainStack.Screen name="FactsScreen" component={FactsScreen} />
      <MainStack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          title: 'SNOWY SCENES',
        }}
      />
      <MainStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: 'ABOUT',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
