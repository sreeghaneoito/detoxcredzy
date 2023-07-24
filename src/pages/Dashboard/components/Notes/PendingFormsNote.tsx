import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {useUtils} from '../../../../hooks/useUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {routeEnum} from '../../../../enums/route.enum';
import {formslice} from '../../../../redux/slices/forms.slice';
import {forms, onboardFlow} from '../../../../enums/store.enum';
import Animated from 'react-native-reanimated';

/**
 * The note that shows if a user have pending form or there is anything missing from the profile API
 * @returns
 */
const PendingFormsNote = () => {
  const {theme, gotoScreen, dispatch} = useUtils();
  const {userdetails} = useSelector((State: RootState) => State.user);
  const {onboardState} = useSelector((State: RootState) => State.form.data);
  const {dashboardDataStatusCode} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );

  if (userdetails?.ssn === '' || userdetails?.ssn === null) {
    // * This will return if the profile api does't have user ssn
    return (
      <Animated.View style={style.container} testID="welcomeNote">
        <View style={[style.card, theme.greenbg]}>
          <Text style={style.heading}>Hey {userdetails?.name?.first},</Text>
          <Text style={[style.content, theme.onSurface]}>
            We don't have your SSN to build your profile. {'\n'}
          </Text>
          <Text
            style={style.link}
            onPress={() => {
              // dispatch(formslice.actions.setFormControl({form: forms.SSN}));
              gotoScreen(routeEnum.SIGNUPDETAILS);
            }}
            testID="updatenow">
            update now
          </Text>
        </View>
      </Animated.View>
    );
  } else if (dashboardDataStatusCode === 404) {
    // * This will return if the user have an invalid ssn
    return (
      <View style={style.container} testID="welcomeNote">
        <View style={[style.card, theme.greenbg]}>
          <Text style={style.heading}>Hey {userdetails?.name?.first},</Text>
          <Text style={[style.content, theme.onSurface]}>
            We are unable to find a CIG profile with your ssn {'\n'}
          </Text>
          <Text
            style={style.link}
            onPress={() => {
              dispatch(
                formslice.actions.setFormControl({data: {form: forms.SSN}}),
              );
              gotoScreen(routeEnum.SIGNUPDETAILS);
            }}
            testID="updatenow">
            update now
          </Text>
        </View>
      </View>
    );
  } else if (onboardState !== onboardFlow.COMPLETED) {
    // * This will return if the user didn't completed the onboard steps
    return (
      <View style={style.container} testID="welcomeNote">
        <View style={[style.card, theme.greenbg]}>
          <Text style={style.heading}>Hey {userdetails?.name?.first},</Text>
          <Text style={[style.content, theme.onSurface]}>
            You didn’t finish building your credit profile. But don’t you worry,
            we saved your spot. Click continue to finish. {'\n'}
          </Text>
          <Text
            style={style.link}
            onPress={() => {
              gotoScreen(routeEnum.SIGNUPONBOARDFLOW, {
                RequireBackButton: true,
              });
            }}
            testID="contniue">
            Continue
          </Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default PendingFormsNote;
