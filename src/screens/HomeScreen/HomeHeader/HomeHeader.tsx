import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { GAME_ITEMS } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';

const HomeHeader = () => {
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const handleAbout = () => {
    navigation.navigate('AboutScreen');
  };

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.headerWrapper}>
      <CustomButton
        handlePress={handleAbout}
        variant="icon"
        iconName="about"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />

      <View style={styles.scoreWrapper}>
        <Image
          source={GAME_ITEMS.coin}
          style={styles.scoreIcon}
          resizeMode="contain"
        />
        <CustomText extraStyle={styles.scoreText}>0</CustomText>
      </View>
      <CustomButton
        handlePress={handleSettings}
        variant="icon"
        iconName="settings"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

export default HomeHeader;
