import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height:
      Dimensions.get('window').height -
      40 -
      (Platform.OS === 'ios' ? getStatusBarHeight() : 0),
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});
