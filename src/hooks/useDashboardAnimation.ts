/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Dimensions, Platform} from 'react-native';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {dashboard} from '../enums/store.enum';
import {dashboardSlice} from '../redux/slices/dashboard.slice';
import {RootState} from '../redux/store/root.reducer';
import {useBubbleAnimation} from './useBubbleAnimation';

export const useDashboardAnimation = () => {
  const deviceWidth = Dimensions.get('screen').width;
  const dispatch = useDispatch();
  const {changeBubblePosition} = useBubbleAnimation();
  const dashboardState = useSelector(
    (State: RootState) => State.dashboard.status,
  );
  const dashboardValue = useSharedValue(dashboardState);

  // * Capital Page
  const capitalAnimatedHead = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            dashboardValue.value === dashboard.CAPITAL ? 0 : 0,
            {duration: 300},
          ),
        },
        {
          translateY: withTiming(
            dashboardValue.value === dashboard.CAPITAL ? 0 : 0,
            {duration: 300},
          ),
        },
      ],
      fontSize: dashboardValue.value === dashboard.CAPITAL ? 24 : 13,
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'Gotham Ultra' : 'Gotham-Ultra',
      marginTop: 10,
    };
  });
  const capitalAnimatedChart = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            dashboardValue.value === dashboard.CAPITAL ? -deviceWidth / 3.3 : 0,
            {stiffness: 50},
          ),
        },
        {
          translateY: withSpring(
            dashboardValue.value === dashboard.CAPITAL ? 50 : 10,
            {stiffness: 50},
          ),
        },
      ],
      width: withTiming(
        dashboardValue.value === dashboard.CAPITAL ? deviceWidth - 40 : 80,
        {
          duration: 400,
        },
      ),
      display:
        dashboardValue.value === dashboard.CAPITAL ||
        dashboardValue.value === dashboard.DASHBOARD
          ? 'flex'
          : 'none',
    };
  });
  const capital = {
    capitalAnimatedHead,
    capitalAnimatedChart,
  };

  // * Capacity Page
  const capacityAnimatedHead = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            dashboardValue.value === dashboard.CAPACITY ? 0 : 0,
            {duration: 300},
          ),
        },
        {
          translateY: withTiming(
            dashboardValue.value === dashboard.CAPACITY ? 0 : 0,
            {duration: 300},
          ),
        },
      ],
      fontSize: dashboardValue.value === dashboard.CAPACITY ? 24 : 13,
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'Gotham Ultra' : 'Gotham-Ultra',
      marginTop: 10,
    };
  });
  const capacityAnimatedChart = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            dashboardValue.value === dashboard.CAPACITY ? deviceWidth / 3.2 : 0,
            {stiffness: 50},
          ),
        },
        {
          translateY: withSpring(
            dashboardValue.value === dashboard.CAPACITY ? 50 : 10,
            {stiffness: 50},
          ),
        },
      ],
      width: withTiming(
        dashboardValue.value === dashboard.CAPACITY ? deviceWidth - 40 : 80,
        {
          duration: 200,
        },
      ),
      display:
        dashboardValue.value === dashboard.CAPACITY ||
        dashboardValue.value === dashboard.DASHBOARD
          ? 'flex'
          : 'none',
    };
  });
  const capacity = {capacityAnimatedHead, capacityAnimatedChart};

  // * Charecter Page
  const charecterAnimatedHead = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            dashboardValue.value === dashboard.CHARECTER ? 0 : 0,
            {duration: 300},
          ),
        },
        {
          translateY: withTiming(
            dashboardValue.value === dashboard.CHARECTER ? 0 : 0,
            {duration: 300},
          ),
        },
      ],
      fontSize: dashboardValue.value === dashboard.CHARECTER ? 24 : 13,
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'Gotham Ultra' : 'Gotham-Ultra',
      marginTop: 10,
    };
  });
  const charecterAnimatedChart = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            dashboardValue.value === dashboard.CHARECTER ? 0 : 0,
            {stiffness: 50},
          ),
        },
        {
          translateY: withSpring(
            dashboardValue.value === dashboard.CHARECTER ? 50 : 10,
            {stiffness: 50},
          ),
        },
      ],
      width: withTiming(
        dashboardValue.value === dashboard.CHARECTER ? deviceWidth - 40 : 80,
        {
          duration: 200,
        },
      ),
      display:
        dashboardValue.value === dashboard.CHARECTER ||
        dashboardValue.value === dashboard.DASHBOARD
          ? 'flex'
          : 'none',
    };
  });
  const charecter = {charecterAnimatedHead, charecterAnimatedChart};

  // * Common
  const hidden = useAnimatedStyle(() => {
    return {
      display: dashboardValue.value !== dashboard.DASHBOARD ? 'flex' : 'none',
    };
  });
  const hiddenInverted = useAnimatedStyle(() => {
    return {
      display: dashboardValue.value !== dashboard.DASHBOARD ? 'none' : 'flex',
    };
  });
  const animatedCardHeight = useAnimatedStyle(() => {
    return {
      height: dashboardValue.value !== dashboard.DASHBOARD ? 0 : 139,
      padding: dashboardValue.value !== dashboard.DASHBOARD ? 0 : 16,
    };
  });
  const common = {hidden, hiddenInverted, animatedCardHeight};
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    dashboardValue.value = dashboardState;
    setTimeout(() => {
      dashboardState !== dashboard.DASHBOARD
        ? setShowDetails(true)
        : setShowDetails(false);
    }, 50);
  }, [dashboardState]);
  const Triggerfunc = (label: any) => {
    dispatch(dashboardSlice.actions.switchDashboardScreen({status: label}));
  };
  const switchLayout = (label: string) => {
    runOnJS(Triggerfunc)(label);
    runOnJS(changeBubblePosition)(2);
  };
  return {
    dashboardState,
    capacity,
    capital,
    charecter,
    common,
    switchLayout,
    showDetails,
  };
};
