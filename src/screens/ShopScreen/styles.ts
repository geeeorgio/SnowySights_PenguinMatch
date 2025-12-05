import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(20),
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: hp(33),
  },
  header: {
    width: '100%',
    height: hp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    width: wp(56),
    height: '100%',
  },
  headerButtonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
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
    color: COLORS.yellow,
    textShadowColor: COLORS.yellowShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  sceneWrapper: {
    width: '100%',
    aspectRatio: 1,
  },
  sceneContent: {
    position: 'relative',
    width: '55%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25%',
    overflow: 'hidden',
  },
  sceneImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(16),
  },
  sceneLockWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  lockIcon: {
    width: wp(50),
    height: hp(50),
  },
  sceneText: {
    fontSize: sp(24),
    fontFamily: FONTS.Black,
    color: COLORS.yellow,
  },
  scenePriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(12),
    zIndex: 1,
  },
  coinIcon: {
    width: wp(35),
    height: hp(35),
  },
  scenePriceText: {
    fontSize: sp(24),
    fontFamily: FONTS.Black,
    color: COLORS.yellow,
    textShadowColor: COLORS.yellowShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  sceneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.darkOverlay,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(4),
  },
  directionButton: {
    flex: 0.2,
    minHeight: hp(66),
    maxHeight: hp(88),
  },
  buyButton: {
    flex: 0.6,
    minHeight: hp(66),
    maxHeight: hp(88),
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
    color: COLORS.blue,
  },
});
