import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import { FRAMES } from 'src/constants';

interface SceneContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const SceneContainer = ({ children, extraStyle }: SceneContainerProps) => {
  return (
    <ImageBackground
      source={FRAMES.modal}
      resizeMode="contain"
      style={[styles.container, extraStyle]}
    >
      {children}
    </ImageBackground>
  );
};

export default SceneContainer;
