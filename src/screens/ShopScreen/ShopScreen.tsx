import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import ShopAlert from './ShopAlert/ShopAlert';
import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
  SceneContainer,
} from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import { GAME_ITEMS, ICONS, OPTIONAL_BACKGROUNDS } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';

const ShopScreen = () => {
  const { score, decrementContextScore } = useGameBackground();
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBuy = async () => {
    if (score < 15) {
      setShouldShowAlert(true);

      setTimeout(() => {
        setShouldShowAlert(false);
      }, 2222);
      return;
    }

    await decrementContextScore(15);
  };

  const handleSwitchScene = () => {
    console.log('switch scene');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.header}>
        <CustomButton
          handlePress={handleBack}
          variant="icon"
          iconName="back"
          buttonStyle={styles.headerButton}
          containerStyle={styles.headerButtonContainer}
        />

        <View style={styles.scoreContainer}>
          <Image
            source={GAME_ITEMS.coin}
            style={styles.scoreIcon}
            resizeMode="contain"
          />
          <CustomText extraStyle={styles.scoreText}>{score}</CustomText>
        </View>
      </View>

      <SceneContainer extraStyle={styles.sceneWrapper}>
        <View style={styles.sceneContent}>
          <ImageBackground
            source={OPTIONAL_BACKGROUNDS.bg1}
            style={styles.sceneImage}
            resizeMode="cover"
          >
            <View style={styles.sceneLockWrapper}>
              <Image
                source={ICONS.lock}
                style={styles.lockIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.scenePriceWrapper}>
              <Image
                source={GAME_ITEMS.coin}
                style={styles.coinIcon}
                resizeMode="contain"
              />
              <CustomText extraStyle={styles.sceneText}>15</CustomText>
            </View>
            <View style={styles.sceneOverlay} />
          </ImageBackground>
        </View>
      </SceneContainer>

      <View style={styles.footer}>
        <CustomButton
          handlePress={handleSwitchScene}
          variant="icon"
          iconName="leftArrow"
          buttonStyle={styles.directionButton}
          containerStyle={styles.buttonContainer}
        />
        <CustomButton
          handlePress={handleBuy}
          variant="main"
          buttonStyle={styles.buyButton}
          containerStyle={styles.buttonContainer}
        >
          <CustomText extraStyle={styles.buttonText}>Unlock</CustomText>
        </CustomButton>
        <CustomButton
          handlePress={handleSwitchScene}
          variant="icon"
          iconName="rightArrow"
          buttonStyle={styles.directionButton}
          containerStyle={styles.buttonContainer}
        />
      </View>

      <ShopAlert isVisible={shouldShowAlert} />
    </CustomScreenWrapper>
  );
};

export default ShopScreen;
