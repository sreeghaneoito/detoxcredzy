import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '100%',
    backgroundColor: '#00000060',
  },
  card: {
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  shadowIOS: {
    shadowColor: '#00000014',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 24,
  },
  shadowAndroid: {
    elevation: 24,
    shadowColor: '#00000060',
  },
  head: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Roboto-Regular',
  },
  customBtn: {
    width: '100%',
  },
});
