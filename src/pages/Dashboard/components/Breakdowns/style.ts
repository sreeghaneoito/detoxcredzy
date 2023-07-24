import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginBottom: 14,
  },
  cardHead: {
    color: '#999BA0',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    marginBottom: 8,
  },
  cardSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  value: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
  },
  editdatabtn: {
    width: 68,
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
  },
  getdatabtn: {
    width: 98,
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
  },
  getdataTxt: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  scoreFlex: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  scoreCard: {
    width: '32%',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    height: 63,
  },
  scoreHead: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    lineHeight: 16,
  },
  score: {
    color: '#FAC600',
    fontSize: 16,
    fontFamily: 'Roboto-Black',
    fontWeight: '900',
  },
  manualEnter: {
    color: '#28AF51',
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
  },
  certificateDesc: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    marginVertical: 10,
  },
  certHeadBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unverified: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    backgroundColor: '#FAC600',
    color: '#FFFFFF',
    width: 70,
    textAlign: 'center',
    paddingVertical: 5,
    borderRadius: 6,
  },
});
