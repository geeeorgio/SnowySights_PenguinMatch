import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  listContainer: {
    gap: hp(10),
  },
  itemWrapper: {
    width: '100%',
    flex: 1,
    minHeight: hp(100),
    maxHeight: hp(111),
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(6),
    paddingVertical: hp(16),
  },
  itemTitle: {
    flex: 0.8,
    flexGrow: 1,
    paddingLeft: wp(12),
    fontSize: sp(14),
    fontFamily: FONTS.SemiBold,
    color: COLORS.blue,
  },
  button: {
    flex: 0.2,
    flexShrink: 0,
    height: '85%',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: hp(40),
  },
});
