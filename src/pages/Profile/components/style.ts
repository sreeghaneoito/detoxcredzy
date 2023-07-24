import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  cardHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 24,
    marginBottom: 18,
  },
  appversion: {
    fontSize: 13,
    marginHorizontal: 24,
    marginBottom: 18,
    opacity: 0.8,
    fontFamily: 'Roboto-Regular',
  },
  seperator: {
    height: 1,
  },
  item: {
    paddingVertical: 14,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 13,
  },
  rightbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateBox: {
    marginHorizontal: 24,
    marginVertical: 18,
    borderColor: '#45AF51',
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
  },
  newversion: {
    fontSize: 13,
  },
  disabledText: {
    color: 'grey',
  },
  rightboxMini: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
