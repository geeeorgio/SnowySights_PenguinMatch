import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { MainStackParamListNavigationProps } from 'src/types';

const HomeMenu = () => {
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const handleStart = () => {
    navigation.navigate('LevelsScreen');
  };

  const handleFrostyFacts = () => {
    navigation.navigate('FactsScreen');
  };

  const handleSnowyScenes = () => {
    navigation.navigate('ShopScreen');
  };

  return (
    <View style={styles.menuWrapper}>
      <CustomButton
        handlePress={handleStart}
        variant="main"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      >
        <CustomText extraStyle={styles.buttonText}>Start</CustomText>
      </CustomButton>
      <CustomButton
        handlePress={handleFrostyFacts}
        variant="main"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      >
        <CustomText extraStyle={styles.buttonText}>Frosty Facts</CustomText>
      </CustomButton>
      <CustomButton
        handlePress={handleSnowyScenes}
        variant="main"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      >
        <CustomText extraStyle={styles.buttonText}>Snowy Scenes</CustomText>
      </CustomButton>
    </View>
  );
};

export default HomeMenu;
