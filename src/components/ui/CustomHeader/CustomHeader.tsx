import { useNavigation } from '@react-navigation/native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { ICONS } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';

interface CustomHeaderProps {
  title?: string;
  showRightButton?: boolean;
  handleRightButton?: () => void;
  rightButtonName?: keyof typeof ICONS;
  props?: NativeStackHeaderProps;
}

const CustomHeader = ({
  title,
  showRightButton,
  handleRightButton,
  rightButtonName,
  props,
}: CustomHeaderProps) => {
  const navigation = useNavigation<MainStackParamListNavigationProps>();
  const options = props?.options;

  const mainTitle = options?.title || title;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          handlePress={handleBack}
          variant="icon"
          iconName="back"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />

        {mainTitle && (
          <View style={styles.titleWrapper}>
            <CustomText extraStyle={styles.title}>{mainTitle}</CustomText>
          </View>
        )}

        {showRightButton ? (
          <CustomButton
            handlePress={handleRightButton || (() => {})}
            variant="icon"
            iconName={rightButtonName}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        ) : (
          <View style={styles.filler} />
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
