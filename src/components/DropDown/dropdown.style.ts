import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  card: {
    // backgroundColor: C.theme.lighttheme.secondary,
    width: '80%',
    borderRadius: 4,
  },
  modalContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cardList: {
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  ListText: {
    fontSize: 13,
  },
  seperator: {
    height: 1,
  },
  label: {
    fontSize: 15,
    marginTop: 2,
  },
});
