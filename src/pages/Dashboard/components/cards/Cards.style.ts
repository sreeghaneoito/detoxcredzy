import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    margin: 20,
  },
  pressable: {
    width: '100%',
  },
  containerMain: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '31%',
  },
  card: {
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
  },
  count: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 2,
    fontFamily: 'Roboto-Black',
  },
  note: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  expandedHeading: {
    fontSize: 56,
    fontFamily: 'Roboto-Black',
  },
  expandedCount: {
    fontSize: 24,
    fontFamily: 'Roboto-Black',
  },
  expandedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -50,
  },
  heading: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
    marginTop: 10,
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
  countBlockExpanded: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headingExpanded: {
    fontSize: 24,
    color: 'black',
    marginTop: 6,
  },
  gothamIos: {
    fontFamily: 'Gotham Ultra',
  },
  gothamAndroid: {
    fontFamily: 'Gotham-Ultra',
  },

  verBox: {
    alignItems: 'flex-end',
  },
  unavailable: {
    color: '#999BA0',
  },
});
