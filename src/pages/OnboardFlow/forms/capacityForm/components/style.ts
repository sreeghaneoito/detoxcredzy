import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'space-between',
    height: Dimensions.get('window').height / 1.4,
  },
  helpText: {
    fontSize: 13,
    color: '#999BA0',
    fontFamily: 'Roboto-Regular',
    fontStyle: 'italic',
    marginTop: 24,
  },
  question: {
    marginBottom: 24,
  },
});
