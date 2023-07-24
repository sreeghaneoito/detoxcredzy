import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  card: {
    height: 175,
    width: 131,
    paddingTop: 24,
    paddingBottom: 34,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  question: {
    fontFamily: 'Roboto-Black',
    fontSize: 40,
  },
  barConatiner: {
    width: 68,
    height: 24,
    borderRadius: 8,
    flexDirection: 'row',
  },
  bar: {
    width: '25%',
    height: 24,
    borderWidth: 0.5,
  },
  barlight: {
    backgroundColor: '#F8F8FA',
    borderColor: '#fff',
  },
  bardark: {
    backgroundColor: '#2D2F33',
    borderColor: '#000',
  },
  active: {
    backgroundColor: '#525FFF',
  },
  leftblock: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightblock: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
