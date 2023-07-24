/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {style} from './Initial.style';
import {routeEnum} from '../../enums/route.enum';
import {Splash_dark, Splash_light} from '../../assets';
import {AppStatusBar} from '../../components';
import branch from 'react-native-branch';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import {useUtils} from '../../hooks/useUtils';
import {useBranch} from '../../hooks/useBranch';

const InitialPage = () => {
  const {loggedin} = useSelector((State: RootState) => State.user);
  const {apploaded} = useSelector((State: RootState) => State.utils);
  const {currentTheme, gotoScreen} = useUtils();
  const {processParams} = useBranch();

  useEffect(() => {
    branch.subscribe(({error, params}) => {
      params?.token
        ? processParams(params, error)
        : !apploaded && setTimeout(() => {}, 3000);
    });
  }, [branch]);
  useEffect(() => {
    setTimeout(() => {
      loggedin
        ? gotoScreen(routeEnum.DASHBOARDTAB)
        : gotoScreen(routeEnum.ONBOARD);
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <AppStatusBar />
      <View style={style.container} testID="splash-screen">
        <AnimatedLottieView
          source={currentTheme === 'dark' ? Splash_dark : Splash_light}
          style={style.animationBox}
          autoPlay
          testID="splash-animation"
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialPage;
