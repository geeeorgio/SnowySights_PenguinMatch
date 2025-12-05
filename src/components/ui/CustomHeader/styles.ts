import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(66),
    marginBottom: hp(20),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: wp(50),
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filler: {
    width: wp(50),
    height: '100%',
  },
  title: {
    fontSize: sp(24),
    letterSpacing: 0.8,
    fontFamily: FONTS.Black,
    color: COLORS.yellow,
    textShadowColor: COLORS.yellowShadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textTransform: 'uppercase',
  },
});
