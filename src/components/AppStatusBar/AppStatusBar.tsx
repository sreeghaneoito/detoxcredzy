import {View, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks/useTheme';

/**
 * App Status Bar
 * @returns JSX Component
 */
const AppStatusBar = () => {
  const {currentTheme} = useTheme();
  try {
    return (
      <View>
        <StatusBar
          backgroundColor={currentTheme === 'dark' ? '#17181A' : '#fff'}
          barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </View>
    );
  } catch (error) {
    console.log('App Status Bar Crash =>', error);
    return <View />;
  }
};

export default AppStatusBar;
