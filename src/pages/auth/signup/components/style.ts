import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    marginVertical: 40,
  },
  passwordText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  head: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
  },
  sub: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
    marginBottom: 16,
  },
  agreeBox: {
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    zIndex: -1,
    marginTop: 24,
    paddingVertical: 16,
  },
  agreeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    textAlign: 'left',
  },
  Checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 8,
    borderRadius: 4,
  },
  privacyText: {
    color: '#999BA0',
    fontSize: 13,
    marginTop: 14,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  okText: {
    color: '#28AF51',
  },
});
