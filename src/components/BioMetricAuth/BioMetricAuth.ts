import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  desc: {
    fontSize: 13,
    // textAlign: 'center',
    marginVertical: 16,
    fontFamily: 'Roboto-Regular',
  },
  bottomBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    fontSize: 13,
    marginHorizontal: 10,
  },
});
