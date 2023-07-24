import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export const style = StyleSheet.create({
  container: {
    width: '100%',
    height:
      Dimensions.get('window').height -
      40 -
      (Platform.OS === 'ios' ? getStatusBarHeight() : 0),
    paddingTop: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  heightBlock: {
    height: 70,
  },
  heightHalf: {
    height: 40,
  },
  hieghtFull: {
    height: 80,
  },
});
