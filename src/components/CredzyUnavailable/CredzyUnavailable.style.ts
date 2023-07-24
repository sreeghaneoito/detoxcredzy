import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '31%',
    paddingVertical: 20,
    borderRadius: 16,
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
  head: {
    textAlign: 'center',
    fontSize: 13,
  },
  errorText: {
    fontSize: 24,
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    color: '#999BA0',
    marginTop: 4,
  },
  chartContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 24,
  },
  oops: {
    fontSize: 24,
    marginTop: 14,
    fontFamily: 'Roboto-Bold',
  },
  errdesc: {
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 24,
    fontSize: 16,
  },
  custombtn: {
    width: '100%',
  },
  calltext: {
    textTransform: 'uppercase',
    marginTop: 24,
    fontSize: 13,
    marginBottom: 16,
    color: '#28AF51',
    fontFamily: 'Roboto-Medium',
  },
});
