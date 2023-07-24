import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  inputBox: {
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 12,
    zIndex: -1,
  },
  inputBoxError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errorText: {
    position: 'absolute',
    bottom: -20,
    left: 16,
    color: 'red',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  labelsucces: {
    color: 'green',
  },
  labelerror: {
    color: 'red',
  },
  textbox: {
    padding: 0,
  },
  container: {
    marginVertical: 20,
  },
});
