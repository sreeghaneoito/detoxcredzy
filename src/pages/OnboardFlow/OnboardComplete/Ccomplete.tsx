/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, SafeAreaView, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './Ccomplete.style';
import {Button} from '../../../components';
import AnimatedLottieView from 'lottie-react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useBubbleAnimation} from '../../../hooks/useBubbleAnimation';
import {withSphere} from '../../../hoc/withBGAnimation';
import {onboardFlow, onboardStep} from '../../../enums/store.enum';
import {Machine_light} from '../../../assets';
import {useForms} from '../../../hooks/useForms';
import {useUtils} from '../../../hooks/useUtils';
import {routeEnum} from '../../../enums/route.enum';
import {formslice} from '../../../redux/slices/forms.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';

const C = () => {
  const {changeBubblePosition} = useBubbleAnimation();
  const {theme, font, gotoScreen, dispatch} = useUtils();
  const {changeonBoardPageStatus, onboardState, updateProgress} = useForms();
  const {
    formLoader,
    data: {formProgress},
  } = useSelector((State: RootState) => State.form);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        changeBubblePosition(5);
      }, 0);
      return () => {
        changeBubblePosition(0);
      };
    }, []),
  );
  const next = () => {
    if (onboardState === onboardFlow.CHARECTER) {
      dispatch(
        formslice.actions.setFormControl({
          data: {
            onboardState: onboardFlow.CAPITAL,
            onboardpagestatus: onboardStep.WELCOME,
            formProgress: 2,
          },
        }),
      );
    } else if (onboardState === onboardFlow.CAPITAL) {
      dispatch(
        formslice.actions.setFormControl({
          data: {
            onboardState: onboardFlow.CAPACITY,
            onboardpagestatus: onboardStep.WELCOME,
            formProgress: 3,
          },
        }),
      );
    } else {
      gotoScreen(routeEnum.ONBOARDCOMPLETE);
    }
  };

  const back = () => {
    changeonBoardPageStatus(onboardStep.FORM);
  };

  return (
    <>
      <SafeAreaView testID="complete-screen">
        <View
          style={[
            style.container,
            Platform.OS === 'android' && style.androidPadding,
          ]}>
          <AnimatedLottieView
            source={Machine_light}
            autoPlay
            loop
            style={style.animtedBox}
          />

          <Text style={[theme.onSurface, style.heading]}>Great Job !</Text>

          {onboardState === onboardFlow.CHARECTER && (
            <Text style={[theme.onSurface, style.desc]}>
              We successfully identified your first{' '}
              <Text style={font.gotham}>C</Text> . We will build this into your
              Credzy profile!
            </Text>
          )}
          {onboardState === onboardFlow.CAPITAL && (
            <Text style={[theme.onSurface, style.desc]}>
              We successfully identified your second{' '}
              <Text style={font.gotham}>C</Text>. We’ll be including this in
              your profile too!
            </Text>
          )}
          {onboardState === onboardFlow.CAPACITY && (
            <Text style={[theme.onSurface, style.desc]}>
              We successfully identified your Third{' '}
              <Text style={font.gotham}>C</Text>. We’ll be including this in
              your profile too!
            </Text>
          )}

          <View style={style.btnGroup}>
            <Button
              type="ghost"
              label="back"
              triggerclick={() => back()}
              Customstyle={style.btnCustom}
              testid="back"
            />
            <Button
              type="primary"
              label={
                (onboardState === onboardFlow.CHARECTER &&
                  'on to the next c') ||
                (onboardState === onboardFlow.CAPITAL && 'on to the final c') ||
                'Finish'
              }
              triggerclick={next}
              Customstyle={style.btnCustom}
              testid="next"
              loading={formLoader}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const Ccomplete = withSphere({BodyContainer: C});
export default Ccomplete;
