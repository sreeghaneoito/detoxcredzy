import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
  },
  block: {
    height: 30,
    width: '20%',
    borderWidth: 0.5,
  },
  blockdark: {
    borderColor: '#17181A',
    backgroundColor: '#2D2F33',
  },
  blocklight: {
    borderColor: '#FFF',
    backgroundColor: '#F8F8FA',
  },
  rightblock: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  leftblock: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
