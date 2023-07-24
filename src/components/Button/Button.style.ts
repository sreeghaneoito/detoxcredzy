import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  btn: {
    marginVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '500',
  },
  fillbtnText: {
    color: '#FFFFFF',
  },
  btnPrimary: {
    backgroundColor: '#28AF51',
  },
  btnGhost: {
    backgroundColor: '#F8F8FA',
  },
  btndanger: {
    backgroundColor: '#E30E2C',
  },
  btnGhostText: {
    color: '#000',
  },
  OutlineBtnDanger: {
    borderColor: '#E30E2C',
  },
  disabled: {
    opacity: 0.5,
  },
});
