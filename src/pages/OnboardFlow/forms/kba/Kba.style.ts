import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  verify: {
    marginTop: 30,
    color: '#525FFF',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginTop: 16,
  },
  sslnote: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
    marginVertical: 20,
    color: '#999BA0',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  policy: {
    textDecorationLine: 'underline',
  },
  sslhightlight: {
    fontStyle: 'normal',
  },
  formContainer: {
    width: Dimensions.get('screen').width - 60,
    marginTop: 40,
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 26,
  },
  numbers: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  modalHead: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginTop: 14,
  },
  modalDesc: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 14,
  },
  modalCustomBtn: {
    marginTop: 24,
  },
  pincodeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  stateBox: {width: '60%'},
  zipBox: {width: '40%', paddingLeft: 12},
  Headercontainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
  },
});

const qtn = StyleSheet.create({
  questionBlock: {
    marginVertical: 20,
  },
  question: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Roboto-Regular',
  },
  qtnNumber: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  answerBlock: {
    marginTop: 20,
  },
  answers: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    backgroundColor: 'green',
    width: 12,
    height: 12,
    borderRadius: 8,
  },
});

export {style, qtn};
