import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height,
    padding: 24,
  },
  head: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginTop: 30,
  },
  sub: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
    marginBottom: 16,
  },
});
