import React from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './OverlayBubble.style';
import {useBubbleAnimation} from '../../hooks/useBubbleAnimation';
import {
  OverlayDiamond_light,
  OverlayRectangle_light,
  OverlayDiamond_dark,
  OverlayRectangle_dark,
} from '../../assets';
import {useTheme} from '../../hooks/useTheme';
import {View} from 'react-native';
interface Props {
  children: any;
}
const OverlayBubbles = ({children}: Props) => {
  const {r1, r2, s1, s2, s3} = useBubbleAnimation();
  const {currentTheme} = useTheme();

  try {
    return (
      <Animated.View style={[styles.container]}>
        <Animated.View style={[styles.s1, s1]} />
        <Animated.View style={[styles.s2, s2]} />
        <Animated.View style={[styles.s3, s3]} />
        <Animated.View style={[styles.r1, r1]}>
          {currentTheme === 'dark' ? (
            <OverlayDiamond_dark />
          ) : (
            <OverlayDiamond_light />
          )}
        </Animated.View>
        <Animated.View style={[styles.r2, r2]}>
          {currentTheme === 'dark' ? (
            <OverlayRectangle_dark />
          ) : (
            <OverlayRectangle_light />
          )}
        </Animated.View>

        {children}
      </Animated.View>
    );
  } catch (error) {
    console.log('Overlay Bubble =>', error);
    return <View />;
  }
};

export default OverlayBubbles;
