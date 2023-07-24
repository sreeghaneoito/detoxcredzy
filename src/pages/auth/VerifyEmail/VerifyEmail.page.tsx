/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './VerifyEmail.style';
import {CredzyLogo_light, CredzyLogo_dark} from '../../../assets';
import {Button, Spacer} from '../../../components';
import {withSphere} from '../../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../../hooks/useBubbleAnimation';
import {useUtils} from '../../../hooks/useUtils';
import {registerSlice} from '../../../redux/slices/registration.slice';
import {useRoute} from '@react-navigation/native';

const Verify = () => {
  const {dispatch, currentTheme, theme, openEmail} = useUtils();
  const route = useRoute();
  const {changeBubblePosition} = useBubbleAnimation();

  useEffect(() => {
    changeBubblePosition(6);
    dispatch(registerSlice.actions.clearRegistration({}));
  }, []);

  return (
    <SafeAreaView>
      <View style={style.container}>
        <Spacer space={30} />
        {currentTheme === 'dark' ? <CredzyLogo_dark /> : <CredzyLogo_light />}
        <Text style={[style.heading, theme.onSurface]}>Verify Your Email</Text>
        <Text style={[style.desc, theme.onSurface]}>
          We sent you a link to verify your email. To continue please click the
          link in the email we sent to {route?.params?.email || ''}
        </Text>
        <Button
          Customstyle={style.custombtn}
          label="open email app now"
          triggerclick={openEmail}
          type="primary"
          testid="verifyemail"
        />
      </View>
    </SafeAreaView>
  );
};
const VerifyEmail = withSphere({BodyContainer: Verify});
export default VerifyEmail;
