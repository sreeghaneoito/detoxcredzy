import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 4,
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  warningBg: {
    backgroundColor: '#B08500' + `${40}`,
  },
  successBg: {
    backgroundColor: '#28AF51' + `${40}`,
  },
  errorBg: {
    backgroundColor: '#E30E2C' + `${40}`,
  },
  successText: {
    color: '#28AF51',
  },
  warningText: {
    color: '#B08500',
  },
  errorText: {
    color: '#E30E2C',
  },
});
