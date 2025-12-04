import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

import { ICONS } from 'src/constants';

const CustomIcon = ({ iconName }: { iconName: keyof typeof ICONS }) => {
  return (
    <Image
      source={ICONS[iconName as keyof typeof ICONS]}
      style={styles.icon}
      resizeMode="contain"
    />
  );
};

export default CustomIcon;
