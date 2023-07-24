import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 20,
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
  },
  desc: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
    marginBottom: 16,
  },
  forgotContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  forgotText: {
    color: '#21913C',
    fontSize: 13,
    marginHorizontal: 10,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Regular',
  },
  divider: {
    backgroundColor: '#272536',
    width: 1,
    height: 14,
  },
});
