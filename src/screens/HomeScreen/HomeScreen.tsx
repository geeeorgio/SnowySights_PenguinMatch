import React from 'react';
import { Image, View } from 'react-native';

import HomeHeader from './HomeHeader/HomeHeader';
import HomeMenu from './HomeMenu/HomeMenu';
import { styles } from './styles';

import { CustomScreenWrapper } from 'src/components';
import { LOGO } from 'src/constants';

const HomeScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <HomeHeader />

      <View style={styles.logoWrapper}>
        <Image source={LOGO} style={styles.logo} resizeMode="contain" />
      </View>

      <HomeMenu />
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
