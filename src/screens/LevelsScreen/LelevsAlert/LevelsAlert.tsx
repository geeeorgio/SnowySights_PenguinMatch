import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

import { CustomText } from 'src/components';

interface LevelsAlertProps {
  isVisible: boolean;
}

const LevelsAlert = ({ isVisible }: LevelsAlertProps) => {
  return (
    <View
      style={[styles.container, isVisible ? styles.visible : styles.hidden]}
    >
      <CustomText extraStyle={styles.text}>
        This level is locked for now. Complete the previous levels first.
      </CustomText>
    </View>
  );
};

export default LevelsAlert;
