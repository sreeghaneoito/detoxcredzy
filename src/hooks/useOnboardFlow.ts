import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {routeEnum} from '../enums/route.enum';
import {onboardFlowSlice} from '../redux/slices/onboardFlow.slice';
import {RootState} from '../redux/store/root.reducer';

/**
 * Its a deprecated Hook. Will be removed in following days
 * @returns
 */
export const useOnboardFlow = () => {
  // States
  const onboardStatus = useSelector(
    (State: RootState) => State.onboardflow.onboardState,
  );
  const onboardPageStatus = useSelector(
    (State: RootState) => State.onboardflow.onboardpagestatus,
  );
  const progressValue = useSelector(
    (State: RootState) => State.onboardflow.progress,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Functions

  const toForm = () => {
    dispatch(onboardFlowSlice.actions.changepageStatus('form'));
  };
  const toComplete = () => {
    dispatch(onboardFlowSlice.actions.changepageStatus('complete'));
  };
  const toWelcome = () => {
    dispatch(onboardFlowSlice.actions.changepageStatus('welcome'));
  };
  const updateProgress = (value: number) => {
    dispatch(onboardFlowSlice.actions.updateProgress(value));
  };

  const eachSectionComplete = () => {
    if (onboardStatus === 'capital') {
      navigation.navigate(routeEnum.PREPAREDASHBOARD);
      dispatch(onboardFlowSlice.actions.changeState('character'));
    }
    if (onboardStatus === 'character') {
      dispatch(onboardFlowSlice.actions.changeState('capacity'));
      toWelcome();
    }
    if (onboardStatus === 'capacity') {
      dispatch(onboardFlowSlice.actions.changeState('capital'));
      toWelcome();
    }
  };

  const changePageStatus = (page: 'welcome' | 'form' | 'complete') => {
    dispatch(onboardFlowSlice.actions.changepageStatus(page));
  };
  const changeSectionStatus = (
    section: 'character' | 'capital' | 'capacity',
  ) => {
    dispatch(onboardFlowSlice.actions.changeState(section));
  };
  return {
    onboardStatus,
    navigation,
    eachSectionComplete,
    onboardPageStatus,
    progressValue,
    toForm,
    toComplete,
    toWelcome,
    updateProgress,

    changePageStatus,
    changeSectionStatus,
  };
};
