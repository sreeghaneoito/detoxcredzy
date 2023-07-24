import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 50,
  },
  backBox: {
    position: 'absolute',
    bottom: 40,
    width: 100,
    alignSelf: 'center',
  },
  backText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    color: '#999BA0',
    width: 100,
    alignSelf: 'center',
  },
});
