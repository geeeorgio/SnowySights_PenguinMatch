import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import { ONBD_BCKD } from 'src/constants';
import type { OnboardingStackParamListNavigationProps } from 'src/types';

const OnboardingScreen2 = () => {
  const { completeOnboarding } = useGameBackground();
  const navigation = useNavigation<OnboardingStackParamListNavigationProps>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  const handleSkip = async () => {
    await completeOnboarding();
  };

  return (
    <ImageBackground source={ONBD_BCKD.onbd3} style={styles.imageBackground}>
      <CustomScreenWrapper extraStyle={styles.container}>
        <CustomText extraStyle={styles.text}>
          Confused penguins gathered around the snowy field, trying to
          understand what happened. Everything familiar felt scattered,
          shuffled, and misplaced
        </CustomText>

        <View style={styles.indicatorContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, index === 2 && styles.activeIndicator]}
            />
          ))}
        </View>
        <View style={styles.btnsWrapper}>
          <CustomButton
            handlePress={handleNext}
            variant="main"
            containerStyle={styles.nextBtnContainer}
            buttonStyle={styles.nextBtnStyle}
          >
            <CustomText extraStyle={styles.nextBtnText}>Next</CustomText>
          </CustomButton>
          <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
            <CustomText extraStyle={styles.skipBtnText}>Skip</CustomText>
          </TouchableOpacity>
        </View>
      </CustomScreenWrapper>
    </ImageBackground>
  );
};

export default OnboardingScreen2;
