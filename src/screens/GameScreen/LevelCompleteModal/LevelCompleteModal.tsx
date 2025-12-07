import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { FRAMES, GAME_ITEMS } from 'src/constants';

interface LevelCompleteModalProps {
  isVisible: boolean;
  reward: number;
  onNext: () => void;
  onHome: () => void;
}

const LevelCompleteModal = ({
  isVisible,
  reward,
  onNext,
  onHome,
}: LevelCompleteModalProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <CustomText extraStyle={styles.title}>SNOW RESTORED!</CustomText>
      <ImageBackground
        source={FRAMES.modal}
        style={styles.modalContainer}
        resizeMode="contain"
      >
        <CustomText extraStyle={styles.text}>
          With your sharp sight, the bay grows calmer. The penguins cheer
          quietly
        </CustomText>

        <View style={styles.rewardContainer}>
          <Image
            source={GAME_ITEMS.coin}
            style={styles.coinIcon}
            resizeMode="contain"
          />
          <CustomText extraStyle={styles.rewardText}>{reward}</CustomText>
        </View>

        <View style={styles.buttonsContainer}>
          <CustomButton
            variant="icon"
            iconName="home"
            handlePress={onHome}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
          <CustomButton
            variant="icon"
            iconName="play"
            handlePress={onNext}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LevelCompleteModal;
