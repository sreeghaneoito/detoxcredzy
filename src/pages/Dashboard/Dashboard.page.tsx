/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  BackHandler,
} from 'react-native';
import {
  AppHeader,
  HeaderWithBack,
  AppStatusBar,
  CredzyUnavailable,
} from '../../components';
import {withSphere} from '../../hoc/withBGAnimation';
import {dashboard} from '../../enums/store.enum';
import {useDashBoard} from '../../hooks/useDashBoard';
import SetGoalNote from './components/Notes/SetGoalNote';
import ItemBreakDown from './components/Breakdowns/ItemBreakDown';
import CreditBreakDown from './components/Breakdowns/CreditBreakDown';
import CardGroup from './components/cards/CardGroup';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {useUtils} from '../../hooks/useUtils';
import {utilsSlice} from '../../redux/slices/utils.slice';
import {scoreWatcherSlice} from '../../redux/slices/scorewatcher.slice';
import {style} from './Dashboard.style';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import DashboardSkelton from '../../components/Loarders/DashboardSkelton.component';
import WelcomeNote from './components/Notes/WelComeNote';
import PendingFormsNote from './components/Notes/PendingFormsNote';
import {userSlice} from '../../redux/slices/user.slice';
import {useFocusEffect} from '@react-navigation/native';
import {useDashboardAnimation} from '../../hooks/useDashboardAnimation';
import {formslice} from '../../redux/slices/forms.slice';

const Dashboard = () => {
  const {dashboardState, goback} = useDashBoard();
  const {dispatch} = useUtils();
  const {switchLayout} = useDashboardAnimation();

  const [showElements, setShowElements] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const {dashboardData, swa, loading, credzyunavailable} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {showWelcomeNote} = useSelector((State: RootState) => State.user);

  useEffect(() => {
    setTimeout(() => {
      dashboardState !== dashboard.DASHBOARD
        ? setShowElements(true)
        : setShowElements(false);
    }, 20);
  }, [dashboardState]);

  useEffect(() => {
    dispatch(utilsSlice.actions.changeApploaded({apploaded: true}));
    fetchdashboardData();
  }, []);

  const fetchdashboardData = () => {
    dispatch(formslice.actions.fetchFormControl(null));
    dispatch(userSlice.actions.fetchUser({}));
    dispatch(scoreWatcherSlice.actions.fetchDashboardData({}));
  };

  const refreshDashboard = () => {
    setRefreshing(true);
    fetchdashboardData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useFocusEffect(
    React.useCallback(() => {
      const handler = BackHandler.addEventListener('hardwareBackPress', () => {
        switchLayout(dashboard.DASHBOARD);
        return true;
      });
      return () => {
        handler.remove();
      };
    }, []),
  );

  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              enabled
              onRefresh={refreshDashboard}
              refreshing={refreshing}
            />
          }>
          <View style={style.container} testID="DashboardScreen">
            <AppStatusBar />

            {/* Show appheader based on the dashboard layout status  */}
            {dashboardState === dashboard.DASHBOARD ? (
              <AppHeader type="withProfile" testid="dashboard" />
            ) : (
              <HeaderWithBack triggerClick={goback} />
            )}

            {/* Check if there is phone number or ssn is missing from the api. If its missing show the Pending Note */}
            {dashboardState === dashboard.DASHBOARD && !loading && (
              <PendingFormsNote />
            )}

            {!loading ? (
              credzyunavailable ? (
                <CredzyUnavailable />
              ) : (
                <Animated.View>
                  {dashboardData.user_goal === '' && <SetGoalNote />}
                  {}
                  {dashboardState !== dashboard.DASHBOARD &&
                    showWelcomeNote && <WelcomeNote />}

                  <Animated.View>
                    <CardGroup swa={swa} />
                  </Animated.View>
                  {showElements &&
                    (dashboardState !== dashboard.CHARECTER ? (
                      <Animated.View testID="itembreakdown">
                        <ItemBreakDown
                          questionnaire={dashboardData.questionnaire}
                        />
                      </Animated.View>
                    ) : (
                      <Animated.View testID="itembreakdown">
                        <CreditBreakDown
                          scores={dashboardData?.questionnaire?.scores}
                        />
                      </Animated.View>
                    ))}
                </Animated.View>
              )
            ) : (
              <DashboardSkelton />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const DashboardPage = withSphere({BodyContainer: Dashboard});
export default DashboardPage;
