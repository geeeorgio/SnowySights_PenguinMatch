import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(20),
    gap: hp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    width: '100%',
    maxHeight: hp(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
