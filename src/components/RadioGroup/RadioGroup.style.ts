import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  label: {
    fontSize: 16,
    color: 'black',
  },
  radioGroup: {
    paddingTop: 24,
  },
  radioBox: {
    marginVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    backgroundColor: 'green',
    width: 12,
    height: 12,
    borderRadius: 8,
  },
  withbg: {
    height: 48,
    paddingHorizontal: 16,
  },
  withoutbg: {
    height: 30,
  },
});
