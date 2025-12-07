import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { FRAMES } from 'src/constants';

interface LevelFailedModalProps {
  isVisible: boolean;
  onRestart: () => void;
  onHome: () => void;
}

const LevelFailedModal = ({
  isVisible,
  onRestart,
  onHome,
}: LevelFailedModalProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <CustomText extraStyle={styles.title}>THE ICE SLIPPED</CustomText>
      <ImageBackground
        source={FRAMES.modal}
        style={styles.modalContainer}
        resizeMode="contain"
      >
        <CustomText extraStyle={styles.text}>
          No worry – even the bravest penguin stumbles on the frost. Try again?
        </CustomText>

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
            iconName="reset"
            handlePress={onRestart}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LevelFailedModal;
