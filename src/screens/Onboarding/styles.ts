import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.blueOverlay,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: hp(33),
    gap: hp(24),
  },
  text: {
    fontSize: sp(21),
    fontFamily: FONTS.SemiBold,
    lineHeight: hp(25),
  },
  indicatorContainer: {
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(6),
    overflow: 'hidden',
  },
  indicator: {
    width: wp(8),
    height: hp(8),
    borderRadius: '100%',
    backgroundColor: COLORS.inactiveIndicator,
  },
  activeIndicator: {
    backgroundColor: COLORS.activeIndicator,
  },
  btnsWrapper: {
    width: '88%',
    paddingHorizontal: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(8),
  },
  nextBtnStyle: {
    width: '100%',
  },
  nextBtnContainer: {
    width: '100%',
    paddingVertical: hp(22),
  },
  nextBtnText: {
    fontSize: sp(20),
    fontFamily: FONTS.SemiBold,
    color: COLORS.blue,
    textAlign: 'center',
  },
  skipBtn: {
    width: '100%',
    paddingVertical: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtnText: {
    fontSize: sp(20),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: hp(33),
  },
  footerWrapper: {
    flex: 0.4,
    width: '100%',
    maxHeight: hp(300),
    paddingHorizontal: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(33),
  },
  footerImage: {
    width: '100%',
    height: '100%',
  },
});
