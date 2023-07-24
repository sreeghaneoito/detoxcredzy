import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  picker: {
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 16,
    marginVertical: 6,
    overflow: 'hidden',
    marginRight: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  top: {
    marginTop: 10,
  },
  errorText: {
    fontSize: 9,
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 16,
    textTransform: 'uppercase',
    marginTop: -4,
    color: '#E30E2C',
  },
  dangerBorder: {
    borderWidth: 1,
    borderColor: '#E30E2C',
  },
});
