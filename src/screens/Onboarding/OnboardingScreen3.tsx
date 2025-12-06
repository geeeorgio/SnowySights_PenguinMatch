import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomScreenWrapper, CustomText } from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import { GAME_ITEMS } from 'src/constants';

const OnboardingScreen3 = () => {
  const { completeContextOnboarding } = useGameBackground();

  const handleNext = async () => {
    await completeContextOnboarding();
  };

  return (
    <CustomScreenWrapper extraStyle={[styles.container]}>
      <View style={styles.contentWrapper}>
        <CustomText extraStyle={styles.text}>
          Now you must step in. Help the penguins bring clarity back to their
          frosty home by matching what belongs together
        </CustomText>

        <View style={styles.indicatorContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, index === 3 && styles.activeIndicator]}
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
            <CustomText extraStyle={styles.nextBtnText}>Start</CustomText>
          </CustomButton>
        </View>
      </View>

      <View style={styles.footerWrapper}>
        <Image
          source={GAME_ITEMS.penguin}
          style={styles.footerImage}
          resizeMode="contain"
        />
      </View>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen3;
