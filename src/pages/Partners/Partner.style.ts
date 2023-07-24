import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  head: {
    textAlign: 'center',
    fontSize: 56,
    marginTop: 23,
    fontFamily: 'Roboto-Bold',
    marginHorizontal: 24,
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 26,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  container: {
    height: '100%',
  },
  card: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 24,
    height: 96,
    flexDirection: 'row',
    alignItems: 'center',
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
  Cardimage: {
    width: 63,
    height: 63,
    marginRight: 9,
    borderRadius: 50,
  },
  CardHead: {
    fontSize: 16,
  },
  CardDesc: {
    fontSize: 13,
    lineHeight: 20,
    color: '#6B6E72',
  },
  cardBox: {
    width: '80%',
  },
  sectionHead: {
    marginHorizontal: 24,
    textAlign: 'right',
    marginTop: 20,
    color: '#999BA0',
    fontSize: 16,
  },
  PageImg: {
    width: 106,
    height: 106,
    alignSelf: 'center',
    borderRadius: 54,
  },
  profilecard: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  profileName: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 24,
    fontFamily: 'Roboto-Bold',
  },
  profileDesc: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 24,
    fontFamily: 'Roboto-Regular',
  },
  profileTime: {
    color: '#6B6E72',
    textAlign: 'center',
    marginTop: 8,
    textTransform: 'uppercase',
    fontSize: 13,
  },
  contactCard: {
    marginHorizontal: 24,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#6B6E72',
  },
  contectElem: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactValue: {
    color: '#28AF51',
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    marginVertical: 12,
    textTransform: 'uppercase',
  },
  contactKeyValue: {
    color: '#28AF51',
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    marginVertical: 12,
    textTransform: 'uppercase',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notAvaiable: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 14,
  },
});
