import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  menuWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(24),
    marginBottom: hp(33),
  },
  button: {
    width: '75%',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(18),
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
    color: COLORS.blue,
    textAlign: 'center',
  },
});
