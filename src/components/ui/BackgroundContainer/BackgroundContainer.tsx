import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { useGameBackground } from 'src/components/layout/BackgroundProvider';

interface BackgroundContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const BackgroundContainer = ({
  children,
  extraStyle,
}: BackgroundContainerProps) => {
  const { contextBg } = useGameBackground();

  return (
    <ImageBackground
      source={contextBg}
      resizeMode="cover"
      style={[styles.container, extraStyle]}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

export default BackgroundContainer;
