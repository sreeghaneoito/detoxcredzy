/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {style} from './OnBoard.style';
import {AppStatusBar, Button} from '../../components';
import {routeEnum} from '../../enums/route.enum';
import AnimatedDescription from './components/AnimatedDescription';
import {Onboard_dark, Onboard_light, CredzyIcon} from '../../assets';
import {useUtils} from '../../hooks/useUtils';
import {utilsSlice} from '../../redux/slices/utils.slice';

const OnBoardPage = () => {
  const {gotoScreen, theme, currentTheme, makecall, dispatch} = useUtils();
  useEffect(() => {
    dispatch(utilsSlice.actions.changeApploaded({apploaded: true}));
  }, []);

  return (
    <SafeAreaView>
      <AppStatusBar />
      <View style={style.container} testID="onboard-screen">
        <AnimatedLottieView
          source={currentTheme === 'dark' ? Onboard_dark : Onboard_light}
          style={style.animatedView}
          autoPlay
          loop
          testID="onboard-animation"
        />
        <View style={style.iconContainer}>
          <CredzyIcon />
        </View>
        <View style={style.textblock}>
          <Text style={[style.heading, theme.onSurface]}>
            Get Crazy About good credit
          </Text>
          <AnimatedDescription />
        </View>
        <View>
          <View style={style.btngroup}>
            <Button
              label="sign in"
              type="ghost"
              Customstyle={style.customStyle}
              triggerclick={() => {
                gotoScreen(routeEnum.LOGINPAGE);
              }}
              testid="signin"
            />
            <Button
              label="new account"
              type="primary"
              Customstyle={style.customStyle}
              triggerclick={() => {
                gotoScreen(routeEnum.REGISTEREMAIL);
              }}
              testid="signup"
            />
          </View>
        </View>
        <Text
          style={style.phone}
          onPress={() => {
            makecall('tel:+1(800)-215-5212');
          }}
          testID="call-help">
          Need Help? (800) 215-5212
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardPage;
