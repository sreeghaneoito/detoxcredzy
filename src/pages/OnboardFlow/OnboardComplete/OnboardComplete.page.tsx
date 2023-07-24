import {View, Text, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import {style} from './Ccomplete.style';
import {Button, Progress} from '../../../components';
import {useTheme} from '../../../hooks/useTheme';
import {withSphere} from '../../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../../hooks/useBubbleAnimation';
import {useFocusEffect} from '@react-navigation/native';
import {formslice} from '../../../redux/slices/forms.slice';
import {onboardFlow, onboardStep} from '../../../enums/store.enum';
import {useDispatch} from 'react-redux';
import {navigate} from '../../../routes/navigations';
import {routeEnum} from '../../../enums/route.enum';

const OnboardCompletePage = () => {
  const {theme, font} = useTheme();
  const {changeBubblePosition} = useBubbleAnimation();
  const dispatch = useDispatch();

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

  const preparedashboard = () => {
    dispatch(
      formslice.actions.setFormControl({
        data: {
          onboardState: onboardFlow.COMPLETED,
          onboardpagestatus: onboardStep.WELCOME,
          formProgress: 0,
        },
      }),
    );
    navigate(routeEnum.PREPAREDASHBOARD);
  };
  return (
    <SafeAreaView>
      <View style={[style.containerSec]}>
        <Progress max={1} value={1} />
        <Text style={[theme.onSurface, style.heading]}>Great Job !</Text>
        <Text style={[theme.onSurface, style.desc]}>
          Your <Text style={font.gotham}>Character</Text>,{' '}
          <Text style={font.gotham}>Capacity</Text>, and{' '}
          <Text style={font.gotham}>Capital</Text> are the three factors lenders
          use to determine your creditworthiness. Now let’s see how each of them
          affects your credit profile and get to work empowering all three!
        </Text>
        <Button
          label="Go to Dashboard"
          type="primary"
          triggerclick={() => preparedashboard()}
          Customstyle={{marginTop: 24}}
        />
      </View>
    </SafeAreaView>
  );
};

const OnboardComplete = withSphere({BodyContainer: OnboardCompletePage});
export default OnboardComplete;
