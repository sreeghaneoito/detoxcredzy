import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  inputbox: {
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 16,
    marginVertical: 6,
    overflow: 'hidden',
    marginRight: 0,
  },
  txtBox: {
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  errorText: {
    fontSize: 9,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 16,
    textTransform: 'uppercase',
    marginTop: -4,
  },
  dangerText: {
    color: '#E30E2C',
  },
  warningText: {
    color: '#B08500',
  },
  dangerBorder: {
    borderWidth: 1,
    borderColor: '#E30E2C',
  },
  warningBorder: {
    borderWidth: 1,
    borderColor: '#B08500',
  },
  togglePwdBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  verified: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    backgroundColor: '#525FFF',
    color: '#FFFFFF',
    width: 70,
    textAlign: 'center',
    paddingVertical: 2,
    borderRadius: 4,
    right: 10,
    position: 'absolute',
    top: 16,
  },
});
