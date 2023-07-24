import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 24,
  },
  logoContainer: {
    marginTop: Dimensions.get('screen').width / 10,
    marginBottom: Dimensions.get('screen').width / 16,
  },
  paragraph: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnCustom: {
    width: '48%',
  },
  btnFullWidth: {
    width: '100%',
  },
  head: {
    fontSize: 60,
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    lineHeight: 70,
  },
});
