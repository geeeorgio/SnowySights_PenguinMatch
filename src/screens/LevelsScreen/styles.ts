import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  levelsList: {
    width: '100%',
    gap: wp(12),
  },
  levelsRow: {
    gap: wp(6),
  },
  levelContainer: {
    flex: 1,
    aspectRatio: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelLockContainer: {
    width: '35%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    marginTop: hp(16),
    textAlign: 'center',
    fontSize: sp(33),
    color: COLORS.yellow,
    fontFamily: FONTS.Black,
    textShadowColor: COLORS.yellowShadow,
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  footer: {
    height: hp(40),
  },
});
