import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { styles } from './styles';

import { CustomHeader, CustomScreenWrapper } from 'src/components';
import type { MainStackParamListNavigationProps } from 'src/types';

const LevelsScreen = () => {
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const handleAbout = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader
        title="LEVELS"
        showRightButton={true}
        handleRightButton={handleAbout}
        rightButtonName="about"
      />
    </CustomScreenWrapper>
  );
};

export default LevelsScreen;
