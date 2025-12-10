import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: hp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    height: '100%',
    flexDirection: 'row',
    gap: wp(6),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerLeftIcon: {
    width: wp(32),
    height: hp(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightButton: {
    width: wp(50),
    height: '100%',
  },
  headerRightContainer: {
    width: wp(50),
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainerContent: {
    width: '100%',
    paddingVertical: wp(26),
    gap: wp(2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameItemContainer: {
    width: wp(35),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameItemImage: {
    width: '100%',
    height: '100%',
  },
  gameContainerButton: {
    width: '44%',
    aspectRatio: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainerButtonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionImage: {
    marginTop: hp(10),
    width: '60%',
    height: '60%',
  },
  penguinContainer: {
    paddingBottom: hp(20),
    alignSelf: 'center',
    width: '60%',
    aspectRatio: 1,
  },
  penguinImage: {
    width: '100%',
    height: '100%',
  },
});
