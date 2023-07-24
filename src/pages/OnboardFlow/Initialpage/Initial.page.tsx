/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {withSphere} from '../../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../../hooks/useBubbleAnimation';
import {style} from './Initial.style';
import {CredzyLogo_light, CredzyLogo_dark} from '../../../assets';
import {Button} from '../../../components';
import {useFocusEffect} from '@react-navigation/native';
import {routeEnum} from '../../../enums/route.enum';
import {useUtils} from '../../../hooks/useUtils';
import {scoreWatcherSlice} from '../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';
import {formslice} from '../../../redux/slices/forms.slice';

const Onboard = () => {
  const {changeBubblePosition} = useBubbleAnimation();
  const {loading} = useSelector((State: RootState) => State.scoreWatcher);
  const {formLoader} = useSelector((State: RootState) => State.form);
  const {
    currentTheme,
    theme,
    font,
    dispatch,
    gotoScreen,
    gotobackScreen,
    route,
  } = useUtils();
  useFocusEffect(
    React.useCallback(() => {
      changeBubblePosition(3);
      return () => changeBubblePosition(0);
    }, []),
  );
  useEffect(() => {
    dispatch(formslice.actions.setFormControl({data: {formProgress: 1}}));
    dispatch(scoreWatcherSlice.actions.fetchDashboardData({}));
  }, []);

  const {RequireBackButton} = route?.params;

  return (
    <SafeAreaView testID="onboardinitial-screen">
      <View style={style.container}>
        <View style={style.logoContainer}>
          {currentTheme === 'dark' ? <CredzyLogo_dark /> : <CredzyLogo_light />}
        </View>
        <Text style={[style.head, theme.onSurface]}>Hello & Welcome</Text>
        {/* <Hello /> */}
        <Text style={[style.paragraph, theme.onSurface]}>
          When qualifying for any credit, your lender will review 3 main factors
          known as the <Text style={font.gotham}>3 C</Text> ’s of credit. Let’s
          see where you are now!
        </Text>
        <View style={style.btnGroup}>
          {RequireBackButton && (
            <Button
              type="ghost"
              label="back"
              triggerclick={gotobackScreen}
              Customstyle={style.btnCustom}
              testid="back"
            />
          )}

          <Button
            type="primary"
            label="find out now"
            triggerclick={() => {
              gotoScreen(routeEnum.SIGNUPONBOARDFLOW);
            }}
            Customstyle={
              RequireBackButton ? style.btnCustom : style.btnFullWidth
            }
            testid="start"
            loading={loading || formLoader}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const OnboardInitial = withSphere({BodyContainer: Onboard});

export default OnboardInitial;
