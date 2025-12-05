import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: hp(20),
  },
  sceneContainer: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsWrapper: {
    width: '80%',
    gap: hp(20),
    paddingVertical: hp(22),
    paddingHorizontal: wp(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.whiteOverlay,
    borderRadius: wp(32),
    paddingVertical: hp(10),
    paddingHorizontal: wp(16),
  },
  termsContainer: {
    justifyContent: 'center',
  },
  optionText: {
    fontSize: sp(14),
    color: COLORS.blue,
  },
  optionSwitch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
});
