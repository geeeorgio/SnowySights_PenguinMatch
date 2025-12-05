import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(60),
  },
  button: {
    width: wp(56),
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(14),
  },
  scoreIcon: {
    width: wp(35),
    height: hp(35),
  },
  scoreText: {
    fontSize: sp(24),
    fontFamily: FONTS.Black,
    color: COLORS.lightBlue,
    textShadowColor: COLORS.textShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
