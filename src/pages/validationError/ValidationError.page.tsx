/* eslint-disable react-hooks/exhaustive-deps */
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {withSphere} from '../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../hooks/useBubbleAnimation';
import {style} from './ValidationError.style';
import {CredzyLogo_light, CredzyLogo_dark} from '../../assets';
import {useUtils} from '../../hooks/useUtils';
import {Button} from '../../components';
import {useDispatch} from 'react-redux';
import {authenticationSlice} from '../../redux/slices/authentication.slice';

const ValidationErrorPage = () => {
  const {changeBubblePosition} = useBubbleAnimation();
  const {currentTheme, theme, makecall, route, gotobackScreen} = useUtils();
  const {code} = route?.params;
  const dispatch = useDispatch();

  /**
   * Change overlay bubbles to third position
   */
  useEffect(() => {
    changeBubblePosition(3);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.logoContainer}>
            {currentTheme === 'dark' ? (
              <CredzyLogo_dark />
            ) : (
              <CredzyLogo_light />
            )}
          </View>
          <Text style={[style.head, theme.onSurface]}>
            {code === 404 && 'Oops! Problem During Validation'}
            {code === 409 && 'Validation Error'}
          </Text>
          <Text style={[style.paragraph, theme.onSurface]}>
            {code === 404 &&
              'We were unable to validate your account.  Please contact customer support to fix this problem. (800) 215-5212'}
            {code === 409 &&
              'The Security Number entered is already in use in another account.  If this number is correct.  Please login to that account with the correct email.'}
          </Text>
          {code === 404 && (
            <Button
              label="Call customer support"
              type="primary"
              testid="call"
              triggerclick={() => {
                makecall('tel:+1(800)-215-5212');
              }}
              Customstyle={style.custombtn}
            />
          )}
          {code === 409 && (
            <Button
              label="I remember my other login"
              type="primary"
              testid="go-to-login"
              triggerclick={() => {
                dispatch(authenticationSlice.actions.logout({}));
              }}
              Customstyle={style.custombtn}
            />
          )}
          {code === 409 && (
            <Text
              style={style.supportText}
              onPress={gotobackScreen}
              testID="re-enter">
              re-enter security number
            </Text>
          )}
          {code === 409 && (
            <Text style={[style.paragraph, theme.onSurface]}>
              If you need further assistance please contact customer support to
              fix this problem.
              <Text style={style.underline}>(800) 215-5212</Text>
            </Text>
          )}

          {code === 409 && (
            <Text
              style={style.supportText}
              onPress={() => {
                makecall('tel:+1(800)-215-5212');
              }}
              testID="call">
              call customer support
            </Text>
          )}
          {code === 404 && (
            <Text
              style={style.supportText}
              onPress={gotobackScreen}
              testID="re-enter">
              re-enter security number
            </Text>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const ValidationError = withSphere({BodyContainer: ValidationErrorPage});
export default ValidationError;
