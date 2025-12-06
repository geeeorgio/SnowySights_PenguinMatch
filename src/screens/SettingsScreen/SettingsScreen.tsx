import React from 'react';
import { Switch, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  SceneContainer,
} from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import { COLORS } from 'src/constants';

const SettingsScreen = () => {
  const {
    contextMusicEnabled,
    contextSoundEnabled,
    enableContextMusic,
    enableContextSound,
  } = useGameBackground();

  const handleTermsOfUse = () => {
    console.log('terms of use to be added soon');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title="SETTINGS" />

      <SceneContainer extraStyle={styles.sceneContainer}>
        <View style={styles.optionsWrapper}>
          <View style={styles.optionsContainer}>
            <CustomText extraStyle={styles.optionText}>Music</CustomText>
            <Switch
              style={styles.optionSwitch}
              value={contextMusicEnabled}
              onValueChange={enableContextMusic}
              trackColor={{
                true: COLORS.switchActive,
                false: COLORS.switchInactive,
              }}
              thumbColor={COLORS.white}
            />
          </View>
          <View style={styles.optionsContainer}>
            <CustomText extraStyle={styles.optionText}>Sound</CustomText>
            <Switch
              style={styles.optionSwitch}
              value={contextSoundEnabled}
              onValueChange={enableContextSound}
              trackColor={{
                true: COLORS.switchActive,
                false: COLORS.switchInactive,
              }}
              thumbColor={COLORS.white}
            />
          </View>
          <TouchableOpacity
            onPress={handleTermsOfUse}
            style={[styles.optionsContainer, styles.termsContainer]}
          >
            <CustomText extraStyle={styles.optionText}>Terms of Use</CustomText>
          </TouchableOpacity>
        </View>
      </SceneContainer>
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
