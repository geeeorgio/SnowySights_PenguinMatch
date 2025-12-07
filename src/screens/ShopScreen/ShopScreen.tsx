import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
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
import type { ShopBackground } from 'src/constants';
import { GAME_ITEMS, ICONS } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';

const ShopScreen = () => {
  const {
    contextScore,
    decrementContextScore,
    contextShopBackgrounds,
    setContextShopBackgrounds,
    contextBg,
    changeContextBg,
  } = useGameBackground();
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [currentBackground, setCurrentBackground] = useState<ShopBackground>(
    contextShopBackgrounds[currentBackgroundIndex],
  );
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  useEffect(() => {
    if (
      contextShopBackgrounds.length > 0 &&
      currentBackgroundIndex < contextShopBackgrounds.length
    ) {
      setCurrentBackground(contextShopBackgrounds[currentBackgroundIndex]);
    }
  }, [contextShopBackgrounds, currentBackgroundIndex]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBuy = async () => {
    if (contextScore < currentBackground.price) {
      setShouldShowAlert(true);

      setTimeout(() => {
        setShouldShowAlert(false);
      }, 2222);
      return;
    }

    const newBackgrounds = contextShopBackgrounds.map((bg) =>
      bg.id === currentBackground.id ? { ...bg, isLocked: false } : bg,
    );

    await setContextShopBackgrounds(newBackgrounds);
    await decrementContextScore(currentBackground.price);

    const updatedBackground = newBackgrounds.find(
      (bg) => bg.id === currentBackground.id,
    );
    if (updatedBackground) {
      setCurrentBackground(updatedBackground);
    }
  };

  const handleSwitchScene = () => {
    setCurrentBackgroundIndex((prevIndex) => {
      const nextIndex =
        prevIndex === contextShopBackgrounds.length - 1 ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

  const handleChangeBackground = () => {
    if (currentBackground.source === contextBg) {
      return;
    }

    changeContextBg(currentBackground.source);
  };

  const buttonText = currentBackground.isLocked
    ? 'Unlock'
    : currentBackground.source === contextBg
      ? 'Current theme'
      : 'Set';

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
          <CustomText extraStyle={styles.scoreText}>{contextScore}</CustomText>
        </View>
      </View>

      <SceneContainer extraStyle={styles.sceneWrapper}>
        <View style={styles.sceneContent}>
          <ImageBackground
            source={currentBackground.source}
            style={styles.sceneImage}
            resizeMode="cover"
          >
            {currentBackground.isLocked && (
              <>
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
                  <CustomText extraStyle={styles.sceneText}>
                    {currentBackground.price}
                  </CustomText>
                </View>
                <View style={styles.sceneOverlay} />
              </>
            )}
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
          handlePress={
            currentBackground.isLocked ? handleBuy : handleChangeBackground
          }
          variant="main"
          buttonStyle={styles.buyButton}
          containerStyle={styles.buttonContainer}
          isDisabled={currentBackground.source === contextBg}
        >
          <CustomText extraStyle={styles.buttonText}>{buttonText}</CustomText>
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
