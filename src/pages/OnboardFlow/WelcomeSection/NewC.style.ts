import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: Dimensions.get('screen').height / 28,
    backgroundColor: 'transparent',
  },
  label: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'Roboto-Bold',
  },
  head: {
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 36,
    textTransform: 'capitalize',
  },
  desc: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    lineHeight: 27,
    fontFamily: 'Roboto-Regular',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  btnCustom: {
    width: '48%',
  },
  cardArea: {
    paddingVertical: 22,
  },
  blueArrow: {
    position: 'absolute',
    right: -80,
  },
  sentenceCase: {
    textTransform: 'capitalize',
  },
  cbox: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
