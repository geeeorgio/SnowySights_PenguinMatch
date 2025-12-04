import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
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
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      </RootStack.Navigator>
    </Layout>
  );
};

export default RootNavigator;
