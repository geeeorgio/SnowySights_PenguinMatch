import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import LevelCompleteModal from './LevelCompleteModal/LevelCompleteModal';
import LevelFailedModal from './LevelFailedModal/LevelFailedModal';
import PauseModal from './PauseModal/PauseModal';
import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomScreenWrapper,
} from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import type { GameRune } from 'src/constants';
import { FRAMES, GAME_ITEMS } from 'src/constants';
import type {
  MainStackParamList,
  MainStackParamListNavigationProps,
} from 'src/types';
import { createLevelItems, getRandomRune, checkIfItemMatches } from 'src/utils';

const GameScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'GameScreen'>>();
  const navigation = useNavigation<MainStackParamListNavigationProps>();
  const { level } = route.params;
  const { completeLevel, setContextScore, contextLevels } = useGameBackground();

  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [runeToFind, setRuneToFind] = useState<GameRune>(getRandomRune());
  const [gameItems, setGameItems] = useState(() => createLevelItems(level));
  const [lives, setLives] = useState(3);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!showPauseModal && !showCompleteModal && !showFailedModal) {
      intervalRef.current = setInterval(() => {
        setRuneToFind(getRandomRune());
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showPauseModal, showCompleteModal, showFailedModal]);

  const handlePressRune = () => {
    if (showPauseModal || showCompleteModal || showFailedModal) {
      return;
    }

    if (gameItems.length === 0) {
      return;
    }

    const isMatch = checkIfItemMatches(runeToFind, gameItems);

    if (isMatch) {
      const newItems = gameItems.slice(1);
      setGameItems(newItems);

      if (newItems.length === 0) {
        handleLevelComplete();
      }
    } else {
      const newLives = Math.max(0, lives - 1);
      setLives(newLives);

      if (newLives === 0) {
        handleLevelFailed();
      }
    }
  };

  const handleLevelComplete = async () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    await completeLevel(level.id);

    await setContextScore(10);

    setShowCompleteModal(true);
  };

  const handleLevelFailed = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setShowFailedModal(true);
  };

  const handlePause = () => {
    setShowPauseModal(true);
  };

  const handleResume = () => {
    setShowPauseModal(false);
  };

  const handleRestart = () => {
    setGameItems(createLevelItems(level));
    setLives(3);
    setRuneToFind(getRandomRune());
    setShowPauseModal(false);
    setShowCompleteModal(false);
    setShowFailedModal(false);
  };

  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };

  const handleNextLevel = () => {
    const currentIndex = contextLevels.findIndex((l) => l.id === level.id);

    if (currentIndex !== -1 && currentIndex < contextLevels.length - 1) {
      const nextLevel = contextLevels[currentIndex + 1];
      if (!nextLevel.isLocked) {
        navigation.replace('GameScreen', { level: nextLevel });
      } else {
        navigation.navigate('LevelsScreen');
      }
    } else {
      navigation.navigate('LevelsScreen');
    }
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <View
              key={idx}
              style={[styles.headerLeftIcon, idx >= lives && { opacity: 0 }]}
            >
              <CustomIcon iconName="heart" />
            </View>
          ))}
        </View>

        <CustomButton
          variant="icon"
          iconName="pause"
          handlePress={handlePause}
          containerStyle={styles.headerRightContainer}
          buttonStyle={styles.headerRightButton}
          isDisabled={showCompleteModal || showFailedModal}
        />
      </View>

      <View style={styles.listContainer}>
        <CustomContainer extraStyle={styles.gameContainerContent}>
          {gameItems.map((item) => (
            <View key={item.uniqueId} style={styles.gameItemContainer}>
              <Image
                source={item.source}
                style={styles.gameItemImage}
                resizeMode="contain"
              />
            </View>
          ))}
        </CustomContainer>
      </View>

      <TouchableOpacity
        style={styles.gameContainerButton}
        onPress={handlePressRune}
        disabled={showPauseModal || showCompleteModal || showFailedModal}
      >
        <ImageBackground
          source={FRAMES.option}
          style={styles.gameContainerButtonImage}
          resizeMode="contain"
        >
          <Image
            source={runeToFind.source}
            style={styles.optionImage}
            resizeMode="contain"
          />
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.penguinContainer}>
        <Image
          source={GAME_ITEMS.penguin}
          style={styles.penguinImage}
          resizeMode="contain"
        />
      </View>

      <PauseModal
        isVisible={showPauseModal}
        onResume={handleResume}
        onRestart={handleRestart}
        onHome={handleHome}
      />

      <LevelCompleteModal
        isVisible={showCompleteModal}
        reward={10}
        onNext={handleNextLevel}
        onHome={handleHome}
      />

      <LevelFailedModal
        isVisible={showFailedModal}
        onRestart={handleRestart}
        onHome={handleHome}
      />
    </CustomScreenWrapper>
  );
};

export default GameScreen;
