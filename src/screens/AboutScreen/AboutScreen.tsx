import React from 'react';

import { styles } from './styles';

import { CustomHeader, CustomScreenWrapper, CustomText } from 'src/components';

const AboutScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title="ABOUT" />
      <CustomText extraStyle={styles.text}>
        Attention Traine: Ice Fish is a calm memory game set in a frosty fishing
        spot. Your task is to bring clarity back by matching what belongs
        together. Each level is designed to feel simple, focused, and quietly
        satisfying — a gentle way to train attention and visual memory without
        pressure. As you progress, you unlock new scenes that reshape the world
        around you, turning the fishing spot into fresh horizons of ice, light,
        and quiet discovery. Between rounds, you can read Frosty Facts — short
        articles filled with stories and details about fishing in cold
        landscapes. Thank you for helping the fishing spot return to peace. One
        match at a time, the ice grows clearer.
      </CustomText>
    </CustomScreenWrapper>
  );
};

export default AboutScreen;
