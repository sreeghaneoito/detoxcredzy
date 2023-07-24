import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  profileBtn: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: '#F8F8FA',
  },
  heading: {
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: 22,
    zIndex: -3,
    elevation: -3,
  },
  backText: {
    color: 'green',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
  backBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
