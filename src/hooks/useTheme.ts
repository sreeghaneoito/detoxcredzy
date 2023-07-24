import {themeSlice} from '../redux/slices/theme.slice';
import {useDispatch, useSelector} from 'react-redux';
import {Appearance, Platform, StyleSheet} from 'react-native';
import {RootState} from '../redux/store/root.reducer';

export const useTheme = () => {
  const dispatch = useDispatch();
  /**
   * Get system active color theme
   */
  let colorScheme = Appearance.getColorScheme();

  /**
   * Get current theme from store
   */
  const currentTheme = useSelector(
    (State: RootState) => State.theme.choosedTheme,
  );

  /**
   * To change the app color theme
   * @param theme preferred color theme to change it may be 'dark' or 'light'
   */
  const changeTheme = (theme: String) => {
    switch (theme) {
      case 'light':
        dispatch(themeSlice.actions.chooseTheme('light'));
        break;
      case 'dark':
        dispatch(themeSlice.actions.chooseTheme('dark'));
        break;
      case 'systemDefault':
        dispatch(themeSlice.actions.chooseTheme(colorScheme || 'light'));
        break;
    }
  };

  /**
   * Common colore scheme of the app
   * while adding a new color, It should have a unique name, and color codes for dark and light theme
   * Don't use real color names (Only hex codes)
   */
  const theme = StyleSheet.create({
    primary: {
      backgroundColor: '#28AF51',
    },
    secondary: {
      backgroundColor: currentTheme === 'dark' ? '#2D2F33' : '#E1E2E8',
    },
    secondaryExtend: {
      backgroundColor: currentTheme === 'dark' ? '#1E1F22' : '#FFFFFF',
    },
    background: {
      backgroundColor: currentTheme === 'dark' ? '#17181A' : '#FFFFFF',
    },
    surface: {
      backgroundColor: currentTheme === 'dark' ? '#1E1F22' : '#F8F8FA',
    },
    surfaceExtend: {
      backgroundColor: currentTheme === 'dark' ? '#2D2F33' : '#FFFFFF',
    },
    greenbg: {
      backgroundColor: currentTheme === 'dark' ? '#1E1F22' : '#F5FFF8',
    },
    ghostBtn: {
      backgroundColor: currentTheme === 'dark' ? '#2D2F33' : '#F8F8FA',
    },
    error: {
      backgroundColor: '#E30E2C',
    },
    onPrimary: {
      color: '#FFFFFF',
    },
    onBackground: {
      color: currentTheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    onSurface: {
      color: currentTheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    onError: {
      color: '#FFFFFF',
    },
    primaryText: {
      color: '#28AF51',
    },
    outlineButton: {
      borderColor: currentTheme === 'dark' ? '#FFFFFF' : '#000000',
    },
    cardBorder: {
      borderColor: currentTheme === 'dark' ? '#6B6E72' : '#E1E2E8',
    },
  });

  /**
   * Custom font family for ui
   */
  const font = StyleSheet.create({
    gotham: {
      fontFamily: Platform.OS === 'ios' ? 'Gotham Ultra' : 'Gotham-Ultra',
    },
  });

  const color = {
    lightGrey: currentTheme === 'dark' ? '#6B6E72' : '#E1E2E8',
  };

  return {changeTheme, theme, currentTheme, font, color};
};
