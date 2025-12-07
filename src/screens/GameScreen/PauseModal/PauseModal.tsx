import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { FRAMES } from 'src/constants';

interface PauseModalProps {
  isVisible: boolean;
  onResume: () => void;
  onRestart: () => void;
  onHome: () => void;
}

const PauseModal = ({
  isVisible,
  onResume,
  onRestart,
  onHome,
}: PauseModalProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <CustomText extraStyle={styles.title}>PAUSED</CustomText>
      <ImageBackground
        source={FRAMES.modal}
        style={styles.modalContainer}
        resizeMode="contain"
      >
        <CustomText extraStyle={styles.text}>
          Take a breather. Even the cold needs a moment
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
          <CustomButton
            variant="icon"
            iconName="play"
            handlePress={onResume}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PauseModal;
