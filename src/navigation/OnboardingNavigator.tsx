import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen0,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <OnboardingStack.Screen
        name="OnboardingScreen0"
        component={OnboardingScreen0}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <OnboardingStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
