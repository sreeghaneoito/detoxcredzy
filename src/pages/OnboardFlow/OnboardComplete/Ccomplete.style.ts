import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
  animtedBox: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 36,
  },
  desc: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  btnCustom: {
    width: '48%',
  },
  androidPadding: {
    paddingTop: 60,
  },
  containerSec: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
});
