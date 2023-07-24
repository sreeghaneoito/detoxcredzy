import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '31%',
    paddingVertical: 20,
    borderRadius: 16,
    height: 140,
    opacity: 0.6,
  },
  shadowIOS: {
    shadowColor: '#00000014',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 24,
  },
  shadowAndroid: {
    elevation: 24,
    shadowColor: '#00000060',
  },
  empty: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 16,
    opacity: 0.6,
  },
});
