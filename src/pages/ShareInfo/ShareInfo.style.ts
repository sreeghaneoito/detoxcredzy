import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  logoBox: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  date: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  container: {
    height: Dimensions.get('window').height,
  },
});
