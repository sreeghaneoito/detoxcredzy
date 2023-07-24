import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {styleCordinates} from '../components/OverlayBubble/overlayDimensions';
import {RootState} from '../redux/store/root.reducer';
import {bubbleanimationSlice} from '../redux/slices/bubbleanimation.slice';

export const useBubbleAnimation = () => {
  const dispatch = useDispatch();
  const animeCat = useSelector(
    (State: RootState) => State.bubbleanimation.currentPosition,
  );
  const floatDelay = useSharedValue(false);
  // setInterval(() => {
  //   floatDelay.value = !floatDelay.value;
  // }, 2000);
  floatDelay.value = withRepeat(withTiming(true), 2, true);
  // * Yellow Bubble
  const s1 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat].s1top, {
        duration: 300,
      }),
      left: withTiming(styleCordinates[animeCat].s1left, {
        duration: 300,
      }),
      transform: [
        {
          translateX: floatDelay.value ? withSpring(10) : withSpring(-10),
        },
        {
          translateY: floatDelay.value ? withSpring(15) : withSpring(-15),
        },
      ],
    };
  });
  //   * Green Bubble
  const s2 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat].s2top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat].s2left, {
        duration: 500,
      }),
      transform: [
        {
          translateX: floatDelay.value
            ? withSpring(-8, {damping: 20})
            : withSpring(14, {damping: 20}),
        },
        {
          translateY: floatDelay.value
            ? withSpring(-10, {damping: 20})
            : withSpring(15, {damping: 20}),
        },
      ],
    };
  });
  //   * Blue Bubble
  const s3 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat].s3top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat].s3left, {
        duration: 500,
      }),
      transform: [
        {
          translateX: floatDelay.value ? withSpring(10) : withSpring(-10),
        },
        {
          translateY: floatDelay.value ? withSpring(15) : withSpring(-15),
        },
      ],
    };
  });
  //   * The Diamond Shape
  const r1 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat].r1top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat].r1left, {
        duration: 500,
      }),
    };
  });
  //   * The Rectangle shape
  const r2 = useAnimatedStyle(() => {
    return {
      top: withTiming(styleCordinates[animeCat].r2top, {
        duration: 500,
      }),
      left: withTiming(styleCordinates[animeCat].r2left, {
        duration: 500,
      }),
    };
  });
  const changeBubblePosition = (stage: number) => {
    dispatch(
      bubbleanimationSlice.actions.changeBubblePosition({
        currentPosition: stage,
      }),
    );
  };
  return {
    r1,
    r2,
    s1,
    s2,
    s3,
    changeBubblePosition,
  };
};
