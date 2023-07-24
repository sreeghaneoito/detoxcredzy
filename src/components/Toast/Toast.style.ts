import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#2D2F33',
    padding: 16,
    marginHorizontal: 8,
    width: Dimensions.get('window').width - 16,
    borderRadius: 8,
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
  },
});
