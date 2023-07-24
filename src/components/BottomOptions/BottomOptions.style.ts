import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 84,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  customStyle: {
    width: '45%',
  },
  fullWidthBtn: {
    width: '100%',
  },
  shadowIOS: {
    shadowColor: '#00000014',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 24,
  },
  shadowAndroid: {
    elevation: 36,
    shadowColor: 'black',
  },
  // marginIos: {
  //   marginBottom: 84,
  // },
  // marginAndroid: {
  //   marginBottom: 50,
  // },
});
