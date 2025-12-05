import type { ReactNode } from 'react';
import React from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcon/CustomIcon';

import { styles } from './styles';

import type { ICONS } from 'src/constants';

interface CustomButtonProps {
  handlePress: () => void;
  variant: 'main' | 'icon';
  isDisabled?: boolean;
  fullWidth?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  distance?: Insets;
  iconName?: keyof typeof ICONS;
  children?: ReactNode;
}

const CustomButton = ({
  children,
  handlePress,
  isDisabled = false,
  fullWidth = false,
  buttonStyle,
  containerStyle,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
  variant = 'main',
  iconName,
}: CustomButtonProps) => {
  const Content =
    variant === 'main' ? (
      <CustomContainer extraStyle={containerStyle}>{children}</CustomContainer>
    ) : (
      <View style={containerStyle}>
        <CustomIcon iconName={iconName as keyof typeof ICONS} />
      </View>
    );

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        buttonStyle,
        pressed && styles.btnPressed,
        fullWidth && { alignSelf: 'stretch' },
        isDisabled && styles.disabled,
      ]}
      onPress={handlePress}
      disabled={isDisabled}
      hitSlop={distance}
    >
      {Content}
    </Pressable>
  );
};

export default CustomButton;
