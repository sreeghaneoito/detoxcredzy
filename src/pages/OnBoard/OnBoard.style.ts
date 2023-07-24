import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  textblock: {
    marginHorizontal: 40,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
  },
  animatedView: {
    width: '100%',
  },
  btngroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    marginTop: 30,
  },
  customStyle: {
    borderRadius: 8,
    width: '42%',
  },
  phone: {
    textAlign: 'center',
    marginTop: 24,
    color: '#999BA0',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    textDecorationLine: 'underline',
    marginBottom: 32,
    width: 180,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  bottomsheet: {
    width: '80%',
    alignSelf: 'center',
  },
  bottomtext: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});
