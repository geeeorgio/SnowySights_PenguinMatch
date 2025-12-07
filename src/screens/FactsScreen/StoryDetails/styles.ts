import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  selectedStoryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: hp(20),
    paddingBottom: hp(30),
  },
  selectedStoryHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(66),
  },
  storyTitleWrapper: {
    width: '100%',
    minHeight: hp(88),
    maxHeight: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyTitleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(16),
  },
  selectedStoryContent: {
    flex: 1,
    width: '100%',
  },
  selectedStoryContentContainer: {
    width: '100%',
  },
  selectedStoryTitle: {
    fontSize: sp(18),
    color: COLORS.blue,
  },
  selectedStoryDescription: {
    fontSize: sp(16),
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
});
