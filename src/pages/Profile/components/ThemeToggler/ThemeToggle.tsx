import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '../../../../hooks/useTheme';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const ThemeToggle = () => {
  const {changeTheme, theme, currentTheme} = useTheme();
  const animatebtn = useAnimatedStyle(() => {
    return {
      right: withTiming(currentTheme === 'light' ? 65 : 0, {
        duration: 300,
      }),
    };
  });
  return (
    <View style={[style.container, theme.secondary]}>
      <Animated.View
        style={[style.btn, theme.background, style.slidebtn, animatebtn]}
      />
      <Pressable
        style={[style.btn]}
        onPress={() => {
          changeTheme('light');
        }}
        testID="lightmodebtn">
        <Text style={theme.onSurface}>Light</Text>
      </Pressable>
      <Pressable
        style={[style.btn]}
        onPress={() => {
          changeTheme('dark');
        }}
        testID="darkmodebtn">
        <Text style={theme.onSurface}>Dark</Text>
      </Pressable>
    </View>
  );
};

export default ThemeToggle;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
  },
  btn: {
    width: 61,
    height: 36,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  slidebtn: {
    position: 'absolute',
    margin: 2,
  },
});
