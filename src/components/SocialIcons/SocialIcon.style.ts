import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 40,
  },
  btn: {
    backgroundColor: '#28AF51',
    width: 25,
    height: 25,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
});
