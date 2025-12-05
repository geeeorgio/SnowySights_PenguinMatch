import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: hp(20),
    padding: wp(16),
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(24),
    overflow: 'hidden',
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});
