import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPressed: {
    opacity: 0.5,
  },
  disabled: {
    opacity: 0.33,
  },
  icon: {
    width: wp(24),
    height: hp(24),
  },
});
