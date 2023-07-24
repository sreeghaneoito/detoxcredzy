import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 24,
  },
  logoContainer: {
    marginTop: Dimensions.get('screen').width / 10,
    marginBottom: Dimensions.get('screen').width / 16,
  },
  head: {
    fontSize: 32,
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    lineHeight: 40,
  },
  paragraph: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 28,
  },
  custombtn: {
    width: '100%',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  supportText: {
    color: '#28AF51',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    marginTop: 30,
  },
});
