import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: hp(20),
    padding: wp(10),
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(24),
    overflow: 'hidden',
  },
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
});
