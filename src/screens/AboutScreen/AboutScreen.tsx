import React from 'react';

import { styles } from './styles';

import { CustomHeader, CustomScreenWrapper, CustomText } from 'src/components';

const AboutScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title="ABOUT" />
      <CustomText extraStyle={styles.text}>
        Snowy Sights: Penguin Match is a calm memory game set in a frosty
        penguin bay. After a strange snowstorm scattered everything across the
        ice, your task is to bring clarity back by matching what belongs
        together. Each level is designed to feel simple, focused, and quietly
        satisfying — a gentle way to train attention and visual memory without
        pressure. As you progress, you unlock new snowy scenes that reshape the
        world around you, turning the bay into fresh horizons of ice, light, and
        quiet discovery. Between rounds, you can read Frosty Facts — short
        articles filled with true stories and surprising details about penguins
        and their lives across oceans and cold landscapes. Thank you for helping
        the bay return to peace. One match at a time, the snow grows clearer.
      </CustomText>
    </CustomScreenWrapper>
  );
};

export default AboutScreen;
