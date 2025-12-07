import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    width: '100%',
    aspectRatio: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(16),
  },
  title: {
    fontSize: sp(30),
    fontFamily: FONTS.Black,
    color: COLORS.yellow,
    shadowColor: COLORS.yellowShadow,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    textAlign: 'center',
    marginBottom: hp(16),
    textTransform: 'uppercase',
  },
  text: {
    fontSize: sp(14),
    color: COLORS.blue,
    textAlign: 'center',
    marginTop: hp(16),
    paddingHorizontal: wp(40),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(16),
  },
  button: {
    width: wp(50),
    height: wp(50),
  },
  buttonContainer: {
    width: wp(50),
    height: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
