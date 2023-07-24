import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert, Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTheme} from './useTheme';
import {openInbox, openComposer} from 'react-native-email-link';

export const useUtils = () => {
  // Import from packages
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  // Import from custom hooks
  const {theme, currentTheme, font} = useTheme();

  /**
   * Utility Function to open the phone app
   * @param number The phone number to make the call. It should be like this - tel:+1(800)-215-5212
   */
  const makecall = (number: string) => {
    Linking.openURL(number);
  };

  /**
   * Utility function to open email inbox
   */
  const openEmail = () => {
    openInbox({})
      .then(() => {})
      .catch(() => {
        Alert.alert('unable to open the email app');
      });
  };

  /**
   * Utility function to open email composer
   * @param to email address to send the mail
   */
  const composeMail = (to: string) => {
    openComposer({to: to})
      .then(() => {})
      .catch(() => {
        // Alert.alert('unable to open the email app');
      });
  };

  /**
   *
   * @param path The route path it should be used from routeEnum file
   * @param params The navigation params for respective pages
   */
  const gotoScreen = (path: any, params?: any) => {
    navigation.navigate(path as any as never, params as any as never);
  };

  /**
   *
   * @returns Utility function to goback
   */
  const gotobackScreen = () => navigation.goBack();

  const composeMessage = (to: string) => {
    Linking.openURL(`sms:${to}`).then(() => {});
  };

  return {
    navigation,
    dispatch,
    theme,
    currentTheme,
    font,
    route,
    makecall,
    gotoScreen,
    gotobackScreen,
    openEmail,
    composeMail,
    composeMessage,
  };
};
