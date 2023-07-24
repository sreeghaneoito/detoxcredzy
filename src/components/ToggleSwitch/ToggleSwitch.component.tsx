import {Pressable} from 'react-native';
import React from 'react';
import {style} from './ToggleSwitch.style';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {useTheme} from '../../hooks/useTheme';

interface Props {
  /**
   * The toggle is on or off
   */
  value: boolean | undefined;
  /**
   * change the toggle status
   */
  onChange: () => void;
  trackColor: {
    /**
     * Color of the toggle track when its true
     */
    true: string;
    /**
     * Color of the toggle track when its false
     */
    false: string;
  };
}

const ToggleSwitch = ({value, onChange, trackColor}: Props) => {
  const animatedTrack = useAnimatedStyle(() => {
    return {
      backgroundColor: value ? trackColor.true : trackColor.false,
    };
  });
  const animatedThumb = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: value ? 12 : 0,
    };
  });

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable style={[style.track, animatedTrack]} onPress={onChange}>
      <Animated.View style={[style.thumb, animatedThumb]} />
    </AnimatedPressable>
  );
};

export default ToggleSwitch;
