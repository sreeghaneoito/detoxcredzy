/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from './Button.style';
import {useTheme} from '../../hooks/useTheme';
import {ButtonProps} from '../../interfaces/component.interface';

/**
 * Outline Button
 * @param type: Button type. it should be primary, ghost, or danger
 * @param label: Button name
 * @param Customstyle: Custom style for button. it should be a style object
 * @param triggerclick: Function that trigger on button click
 * @param disabled: Is the button is disabled or not
 * @param testid: Test id for automation
 * @param loading: Is the button is loading or not
 * @returns JSX Component
 */
const OutlineButton = ({
  Customstyle,
  triggerclick,
  label,
  type,
  testid,
  loading,
}: ButtonProps) => {
  const {theme} = useTheme();
  try {
    return (
      <TouchableOpacity
        testID={`${testid}btn`}
        onPress={triggerclick}
        style={[
          style.btn,
          {
            borderWidth: 1,
            backgroundColor: 'transparent',
          },
          Customstyle,
          type === 'primary' && theme.outlineButton,
          type === 'danger' && style.OutlineBtnDanger,
        ]}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[style.btnText, theme.onSurface]}>{label}</Text>
        )}
      </TouchableOpacity>
    );
  } catch (error) {
    console.log('Outline Button crash =>', error);
    return <View style={style.btn} />;
  }
};

export default OutlineButton;
