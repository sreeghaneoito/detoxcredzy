import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  animationBox: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});
