import {Dimensions, StyleSheet} from 'react-native';
import {C} from '../../constants';

export const style = StyleSheet.create({
  card: {
    backgroundColor: C.theme.lighttheme.background,
    width: Dimensions.get('window').width - 48,
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 14,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
    textAlign: 'center',
  },
  ModalbtnGroup: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  modal: {
    backgroundColor: '#1E1F2270',
    height: '110%',
    marginTop: -20,
  },
  between: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
  },
});
