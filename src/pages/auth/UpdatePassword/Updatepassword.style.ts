import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  },
  description: {
    color: '#999BA0',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
    lineHeight: 20,
  },
  form: {
    margin: 40,
  },
  btnContainer: {
    margin: 40,
  },
});
