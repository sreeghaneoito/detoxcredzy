import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from './Progress.style';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import Close from '../../assets/icons/Close';
import {useTheme} from '../../hooks/useTheme';
export interface Props {
  max: number;
  value: number;
  withClose?: boolean;
  closefunc?: () => void;
}
const Progress = ({max, value, withClose, closefunc}: Props) => {
  const animateProgressBar = useAnimatedStyle(() => {
    return {
      width: withTiming(`${(value * 100) / max}%`, {
        duration: 400,
      }),
    };
  });
  const {currentTheme} = useTheme();
  const bg = {
    backgroundColor: currentTheme === 'dark' ? '#000000' : '#F8F8FA',
  };
  try {
    return (
      <View style={style.container}>
        <View style={[style.progressTrack, withClose && style.withClose, bg]}>
          <Animated.View style={[style.progressThumb, animateProgressBar]} />
        </View>
        {withClose && (
          <TouchableOpacity onPress={closefunc}>
            <Close />
          </TouchableOpacity>
        )}
      </View>
    );
  } catch (error) {
    console.log('Progress =>', error);
    return <View style={style.container} />;
  }
};

export default Progress;
