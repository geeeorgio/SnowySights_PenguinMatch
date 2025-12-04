import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ImageBackground } from 'react-native';

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
  const { bg } = useGameBackground();

  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={[styles.container, extraStyle]}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundContainer;
