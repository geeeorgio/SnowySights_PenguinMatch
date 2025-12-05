import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomText } from 'src/components';

interface ShopAlertProps {
  isVisible: boolean;
}

const ShopAlert = ({ isVisible }: ShopAlertProps) => {
  return (
    <View
      style={[styles.container, isVisible ? styles.visible : styles.hidden]}
    >
      <CustomText extraStyle={styles.text}>
        The frost won’t open yet — gather more points
      </CustomText>
    </View>
  );
};

export default ShopAlert;
