import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const style = StyleSheet.create({
  container: {
    height:
      Dimensions.get('window').height -
      (Platform.OS === 'ios' ? getStatusBarHeight() : 0),
  },
  btnCustom: {
    width: 160,
    marginTop: 24,
  },
  modalHeading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginTop: 14,
  },
  modalDesc: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
    marginTop: 14,
    textAlign: 'center',
  },
  radioBox: {
    padding: 24,
  },
  radioHeader: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
