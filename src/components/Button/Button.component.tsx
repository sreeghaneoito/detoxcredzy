import React, {useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {style} from './Button.style';
import {ButtonProps} from './../../interfaces/component.interface';

/**
 * Common Button
 * @param type: Button type. it should be primary, ghost, or danger
 * @param label: Button name
 * @param Customstyle: Custom style for button. it should be a style object
 * @param triggerclick: Function that trigger on button click
 * @param disabled: Is the button is disabled or not
 * @param testid: Test id for automation
 * @param loading: Is the button is loading or not
 * @returns JSX Component
 */
const Button = ({
  type,
  label,
  Customstyle,
  triggerclick,
  disabled,
  testid,
  loading,
}: ButtonProps) => {
  const debounceRef = useRef<any>();

  // Button Click with rebounce
  const buttonClick = () => {
    if (!debounceRef.current) {
      triggerclick();
      debounceRef.current = setInterval(() => {
        clearInterval(debounceRef.current);
        debounceRef.current = null;
      }, 800);
    }
  };

  const {theme} = useTheme();

  try {
    return (
      <TouchableOpacity
        activeOpacity={loading ? 1 : 0.2}
        testID={`${testid}button`}
        style={[
          style.btn,
          type === 'danger' && style.btndanger,
          type === 'primary' && style.btnPrimary,
          type === 'ghost' && theme.ghostBtn,
          Customstyle,
          disabled && style.disabled,
        ]}
        onPress={!disabled ? buttonClick : () => {}}>
        {loading ? (
          <Animated.View>
            <ActivityIndicator color={'#fff'} />
          </Animated.View>
        ) : (
          <Animated.Text
            style={[
              style.btnText,
              style.fillbtnText,
              type === 'ghost' && theme.onSurface,
            ]}>
            {label}
          </Animated.Text>
        )}
      </TouchableOpacity>
    );
  } catch (error) {
    console.log('Button Crash =>', error);
    return <View style={style.btn} />;
  }
};

export default Button;
