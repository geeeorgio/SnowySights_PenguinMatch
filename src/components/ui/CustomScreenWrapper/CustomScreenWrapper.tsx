import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface ScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomScreenWrapper = ({ children, extraStyle }: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.wrapper, extraStyle]}>{children}</SafeAreaView>
  );
};

export default CustomScreenWrapper;
