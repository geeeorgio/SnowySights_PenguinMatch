import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

import LevelsAlert from './LelevsAlert/LevelsAlert';
import { styles } from './styles';

import {
  CustomHeader,
  CustomIcon,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { useGameBackground } from 'src/components/layout/BackgroundProvider';
import type { GameLevel } from 'src/constants';
import { FRAMES } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';

const LevelsScreen = () => {
  const { contextLevels } = useGameBackground();
  const navigation = useNavigation<MainStackParamListNavigationProps>();
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  const handleAbout = () => {
    navigation.navigate('AboutScreen');
  };

  const handleLevelPress = (level: GameLevel) => {
    if (level.isLocked) {
      setShouldShowAlert(true);
      setTimeout(() => {
        setShouldShowAlert(false);
      }, 2222);

      return;
    }

    navigation.navigate('GameScreen', { level });
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader
        title="LEVELS"
        showRightButton={true}
        handleRightButton={handleAbout}
        rightButtonName="about"
      />

      <FlatList
        data={contextLevels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.levelContainer}
            onPress={() => handleLevelPress(item)}
          >
            <ImageBackground
              source={FRAMES.option}
              style={styles.levelImage}
              resizeMode="contain"
            >
              {item.isLocked ? (
                <View style={styles.levelLockContainer}>
                  <CustomIcon iconName="lock" />
                </View>
              ) : (
                <CustomText extraStyle={styles.levelText}>
                  {item.level}
                </CustomText>
              )}
            </ImageBackground>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={styles.levelsRow}
        contentContainerStyle={styles.levelsList}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.footer} />}
      />
      <LevelsAlert isVisible={shouldShowAlert} />
    </CustomScreenWrapper>
  );
};

export default LevelsScreen;
