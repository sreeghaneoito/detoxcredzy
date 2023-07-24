import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import InitialPage from '../pages/IntitialPage/Initial.page';
import {navigationref} from './navigations';
import {RootState} from '../redux/store/root.reducer';
import {CustomDarkTheme, CustomDefaultTheme} from '../utils/themes/themes';
import {routeEnum} from '../enums/route.enum';
import {
  LazyLoginPage,
  LazyDashBoardPage,
  LazyMyGoalPage,
  LazyOnBoardPage,
  LazyProfilePage,
  LazyForgotCredentials,
  LazyUpdatePassword,
  LazyOnboardFlow,
  LazyShareInfo,
  LazySignupOnboardWelcome,
  LazyRegisterPassword,
  LazySignupDetails,
  LazyCreditOverview,
  LazyPrepareDashboard,
  LazyVerifyEmail,
  LazyRegisterEmail,
  LazyValidationError,
  LazyNewPassword,
  LazyDashboardForms,
  LazyPartnerList,
  LazyPartnerProfile,
  LazyKba,
  LazyKbaQuestions,
  LazyChangeEmail,
  LazyOnboardComplete,
} from './pages';
import {fromRight, fromTop} from '../utils/functions/routeTransitions';
import DashboardTab from './DashboardTab';
import analytics from '@react-native-firebase/analytics';

const RootNavigation = () => {
  const RootStack = createStackNavigator();
  const choosedTheme = useSelector(
    (state: RootState) => state.theme.choosedTheme,
  );
  const {loggedin} = useSelector((State: RootState) => State.user);
  const {apploaded} = useSelector((State: RootState) => State.utils);
  useEffect(() => {
    setTheme(choosedTheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme);
  }, [choosedTheme]);

  const [theme, setTheme] = useState(
    choosedTheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme,
  );
  const chooseInitialRoute = (): string => {
    if (apploaded) {
      if (loggedin) {
        return routeEnum.DASHBOARDTAB;
      } else {
        return routeEnum.ONBOARD;
      }
    } else {
      return routeEnum.INITIALPAGE;
    }
  };

  const routeNameRef = React.useRef();

  const onReady = (): void => {
    routeNameRef.current = navigationref.current.getCurrentRoute().name;
  };

  const onRouteChange = async (): Promise<void> => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationref?.current?.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;
  };

  return (
    <PaperProvider>
      <NavigationContainer
        ref={navigationref}
        theme={theme}
        onReady={onReady}
        onStateChange={onRouteChange}>
        <RootStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={chooseInitialRoute}>
          {/* initialRouteName={routeEnum.DASHBOARDTAB}> */}
          {/* initialRouteName={routeEnum.KBAQUESTIONS}> */}
          {!apploaded && (
            <RootStack.Screen
              name={routeEnum.INITIALPAGE}
              component={InitialPage}
            />
          )}
          {!loggedin && (
            <>
              <RootStack.Screen
                name={routeEnum.LOGINPAGE}
                component={LazyLoginPage}
                options={fromRight}
              />
              <RootStack.Screen
                name={routeEnum.ONBOARD}
                component={LazyOnBoardPage}
                options={{
                  gestureEnabled: false,
                }}
              />
            </>
          )}
          <RootStack.Screen
            name={routeEnum.DASHBOARDPAGE}
            component={LazyDashBoardPage}
            options={{...fromRight, gestureEnabled: false}}
          />
          <RootStack.Screen
            name={routeEnum.PROFILEPAGE}
            component={LazyProfilePage}
            options={fromTop}
          />

          <RootStack.Screen
            name={routeEnum.MYGOAL}
            component={LazyMyGoalPage}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.SHAREINFO}
            component={LazyShareInfo}
            options={fromRight}
          />

          <RootStack.Screen
            name={routeEnum.FORGOTCREDENTIALS}
            component={LazyForgotCredentials}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.UPDATEPASSWORD}
            component={LazyUpdatePassword}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.SIGNUPONBOARDFLOW}
            component={LazyOnboardFlow}
            options={fromRight}
          />

          <RootStack.Screen
            name={routeEnum.ONBOARDWELCOME}
            component={LazySignupOnboardWelcome}
            options={{...fromRight, gestureEnabled: false}}
          />
          <RootStack.Screen
            name={routeEnum.REGITSERPASSWORD}
            component={LazyRegisterPassword}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.SIGNUPDETAILS}
            component={LazySignupDetails}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.CREDITOVERVIEW}
            component={LazyCreditOverview}
          />
          <RootStack.Screen
            name={routeEnum.PREPAREDASHBOARD}
            component={LazyPrepareDashboard}
          />
          <RootStack.Screen
            name={routeEnum.VERIFYEMAIL}
            component={LazyVerifyEmail}
          />
          <RootStack.Screen
            name={routeEnum.REGISTEREMAIL}
            component={LazyRegisterEmail}
          />
          <RootStack.Screen
            name={routeEnum.VALIDATIONERROR}
            component={LazyValidationError}
          />
          <RootStack.Screen
            name={routeEnum.NEWPASSWORD}
            component={LazyNewPassword}
          />
          <RootStack.Screen
            name={routeEnum.DASHBOARDFORM}
            component={LazyDashboardForms}
          />
          <RootStack.Screen
            name={routeEnum.DASHBOARDTAB}
            component={DashboardTab}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.PARTNERLISTPAGE}
            component={LazyPartnerList}
            options={fromRight}
          />
          <RootStack.Screen
            name={routeEnum.PARTNERPROFILE}
            component={LazyPartnerProfile}
            options={fromRight}
          />
          <RootStack.Screen name={routeEnum.KBA} component={LazyKba} />
          <RootStack.Screen
            name={routeEnum.KBAQUESTIONS}
            component={LazyKbaQuestions}
          />
          <RootStack.Screen
            name={routeEnum.CHANGEEMAIL}
            component={LazyChangeEmail}
          />
          <RootStack.Screen
            name={routeEnum.ONBOARDCOMPLETE}
            component={LazyOnboardComplete}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default RootNavigation;
