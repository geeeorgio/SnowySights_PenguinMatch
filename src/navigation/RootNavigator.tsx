import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isOnboardingCompleted, isLoading } = useGameBackground();

  return (
    <Layout>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade',
        }}
      >
        {isOnboardingCompleted && !isLoading ? (
          <RootStack.Screen name="MainStack" component={MainNavigator} />
        ) : (
          <RootStack.Screen
            name="OnboardingStack"
            component={OnboardingNavigator}
          />
        )}
      </RootStack.Navigator>
    </Layout>
  );
};

export default RootNavigator;
