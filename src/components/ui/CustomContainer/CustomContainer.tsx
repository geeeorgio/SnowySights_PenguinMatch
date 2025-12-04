import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import { FRAMES } from 'src/constants';

interface CustomContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomContainer = ({ children, extraStyle }: CustomContainerProps) => {
  return (
    <ImageBackground
      source={FRAMES.btn}
      resizeMode="contain"
      style={[styles.container, extraStyle]}
    >
      {children}
    </ImageBackground>
  );
};

export default CustomContainer;
