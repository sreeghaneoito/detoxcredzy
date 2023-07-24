import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    margin: 40,
  },
  desc: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
  },
  modalHeading: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  modaldesc: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
  },
  modalBtnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 24,
  },
  customStyleBtn: {
    width: '45%',
  },
});
