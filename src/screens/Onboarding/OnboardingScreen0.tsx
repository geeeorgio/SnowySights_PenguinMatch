import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import { ONBD_BCKD } from 'src/constants';
import type { OnboardingStackParamListNavigationProps } from 'src/types';

const OnboardingScreen0 = () => {
  const { completeContextOnboarding } = useGameBackground();
  const navigation = useNavigation<OnboardingStackParamListNavigationProps>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen1');
  };

  const handleSkip = async () => {
    await completeContextOnboarding();
  };

  return (
    <ImageBackground source={ONBD_BCKD.onbd1} style={styles.imageBackground}>
      <CustomScreenWrapper extraStyle={styles.container}>
        <CustomText extraStyle={styles.text}>
          A peaceful winter day in the Penguin Bay suddenly changed when an
          unusual shimmering snowstorm rose from the cold horizon. It wasn’t
          dangerous — just strangely alive, swirling with playful sparkles.
        </CustomText>

        <View style={styles.indicatorContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, index === 0 && styles.activeIndicator]}
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

export default OnboardingScreen0;
