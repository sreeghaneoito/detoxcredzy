import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginBottom: 16,
    lineHeight: 24,
  },
  desc: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  highlighted: {
    fontFamily: 'Roboto-Bold',
  },
  checKArea: {
    padding: 16,
    marginTop: 16,
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 13,
    width: '90%',
    paddingLeft: 5,
    fontFamily: 'Roboto-Regular',
  },
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 8,
    borderRadius: 4,
  },
  btnGroup: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  customBtn: {
    width: '48%',
  },
});
