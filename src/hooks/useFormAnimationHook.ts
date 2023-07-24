import {useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {inputfield} from '../interfaces/hooks.interface';
import {useTheme} from './useTheme';

export const useDropdownAnimationHook = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [ismodalOpen, SetismodalOpen] = useState(false);
  const modalOpen = useSharedValue(selectedValue !== '');

  const Label = useAnimatedStyle(() => {
    return {
      color: modalOpen.value ? 'green' : 'black',
      fontSize: modalOpen.value ? 10 : 14,
    };
  });
  return {
    Label,
    selectedValue,
    setSelectedValue,
    ismodalOpen,
    SetismodalOpen,
    modalOpen,
  };
};
export const useInputAnimationHook = ({
  errortype,
  focus,
  value,
}: inputfield) => {
  const [isActive, setIsActive] = useState(focus || false);
  const [content, setContent] = useState(value || '');
  const {currentTheme} = useTheme();

  const labelAnimation = useAnimatedStyle(() => {
    return {
      color:
        isActive || content !== ''
          ? (errortype === 'danger' && '#E30E2C') ||
            (errortype === 'warning' && '#B08500') ||
            'green'
          : currentTheme === 'dark'
          ? 'white'
          : 'black',
      position: 'absolute',
      left: 16,
      top: withTiming(isActive || content !== '' ? 4 : 16, {duration: 200}),
      fontSize: isActive || content !== '' ? 9 : 13,
      fontFamily: 'Roboto-Regular',
    };
  });
  const animatedTextInput = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 16,
      top: withTiming(isActive || content !== '' ? 18 : 60, {duration: 200}),
    };
  });
  return {
    labelAnimation,
    setIsActive,
    animatedTextInput,
    isActive,
    setContent,
    content,
  };
};
