/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dashboard} from '../enums/store.enum';
import {dashboardSlice} from '../redux/slices/dashboard.slice';
import {RootState} from '../redux/store/root.reducer';
import {useBubbleAnimation} from './useBubbleAnimation';

export const useDashBoard = () => {
  // * current dashboard screen
  const dashboardState = useSelector(
    (State: RootState) => State.dashboard.status,
  );
  const dispatch = useDispatch();
  const {changeBubblePosition} = useBubbleAnimation();

  // * Functions
  const goback = () => {
    changeBubblePosition(1);
    dispatch(
      dashboardSlice.actions.switchDashboardScreen({
        status: dashboard.DASHBOARD,
      }),
    );
  };
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        changeBubblePosition(1);
      }, 50);
      return () => changeBubblePosition(0);
    }, []),
  );

  return {dashboardState, goback};
};
