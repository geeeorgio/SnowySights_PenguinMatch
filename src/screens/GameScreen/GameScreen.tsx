import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomScreenWrapper,
} from 'src/components';
import type { GameRune } from 'src/constants';
import { FRAMES, GAME_ITEMS } from 'src/constants';
import type { MainStackParamList } from 'src/types';
import { createLevelItems, getRandomRune } from 'src/utils';

const GameScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'GameScreen'>>();
  const { level } = route.params;

  const [showModal, setShowModal] = useState(false);
  const [runeToFind, setRuneToFind] = useState<GameRune>(getRandomRune());

  const [gameItems, setGameItems] = useState(createLevelItems(level));

  const handlePause = () => {
    setShowModal(true);
  };

  const handleResume = () => {
    setShowModal(false);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <View key={idx} style={styles.headerLeftIcon}>
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

      <TouchableOpacity style={styles.gameContainerButton} onPress={() => {}}>
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

      {/* <PauseModal isVisible={showModal} onClose={handleResume} /> */}
    </CustomScreenWrapper>
  );
};

export default GameScreen;
