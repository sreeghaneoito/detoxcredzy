import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const style = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height -
      (Platform.OS === 'ios' ? getStatusBarHeight() : 0) -
      (Platform.OS === 'ios' ? 40 : 0),
  },
  heading: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
  },
  form: {
    padding: 20,
  },
});
