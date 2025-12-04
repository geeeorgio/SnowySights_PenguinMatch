import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { BackgroundContainer, BackgroundProvider } from './components';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <BackgroundProvider>
      <BackgroundContainer>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </BackgroundContainer>
    </BackgroundProvider>
  );
};

export default App;
