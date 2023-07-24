import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    textAlign: 'right',
    color: '#28AF51',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    textDecorationLine: 'underline',
  },
  backContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbtn: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    textTransform: 'uppercase',
  },
});
