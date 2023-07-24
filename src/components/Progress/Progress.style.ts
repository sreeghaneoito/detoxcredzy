import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTrack: {
    // backgroundColor: '#F2F5F7',
    height: 10,
    width: '100%',
    borderRadius: 19,
  },
  progressThumb: {
    backgroundColor: '#28AF51',
    height: 10,
    borderRadius: 19,
  },
  withClose: {
    width: Dimensions.get('window').width - 100,
  },
});
