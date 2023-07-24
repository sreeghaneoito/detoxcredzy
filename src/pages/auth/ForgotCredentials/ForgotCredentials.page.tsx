import {Text, SafeAreaView, View, Keyboard} from 'react-native';
import {
  HeaderWithBack,
  InputField,
  Button,
  AnimatedModal,
  OutlineButton,
} from '../../../components';
import React from 'react';
import {style} from './ForgotCredentials.style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ForgotCredentialValidationSchema} from '../../../utils/schemas/validation';
import {useSelector} from 'react-redux';
import {authenticationSlice} from '../../../redux/slices/authentication.slice';
import {RootState} from '../../../redux/store/root.reducer';
import {useUtils} from '../../../hooks/useUtils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotCredentials = () => {
  // Hooks
  const {dispatch, theme, route, gotobackScreen, openEmail} = useUtils();
  const {forgotType} = route.params;

  // Form Controls
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(ForgotCredentialValidationSchema),
  });

  const onSubmit = (data: any) => {
    Keyboard.dismiss();
    if (forgotType === 'password') {
      dispatch(authenticationSlice.actions.updatepasswordwithemail(data.email));
    }
  };
  const {loading, success} = useSelector(
    (State: RootState) => State.authentication.updatePassword,
  );
  return (
    <>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView testID="forgot-credentials">
          <HeaderWithBack
            triggerClick={gotobackScreen}
            heading={
              (forgotType === 'password' && 'Password Reset') ||
              (forgotType === 'username' && 'Username Recovery') ||
              ''
            }
          />
          <View style={style.container}>
            {forgotType === 'username' && (
              <Text style={[style.desc, theme.onSurface]}>
                Enter the email you used for this account then we will email the
                username tied to that email.
              </Text>
            )}
            {forgotType === 'password' && (
              <Text style={[style.desc, theme.onSurface]}>
                Enter the email you used for this account then we will email you
                a password reset link.
              </Text>
            )}
            <Controller
              name="email"
              control={control}
              render={({field: {onChange}}) => (
                <InputField
                  placeholder="Enter your email"
                  label="Email"
                  changeText={onChange}
                  testid="email"
                  keyboardType="email-address"
                  errortype={errors.email && 'danger'}
                  errortext={errors.email?.message}
                />
              )}
            />
            <Button
              label="Send Email"
              type="primary"
              triggerclick={handleSubmit(onSubmit)}
              testid="sentemail"
              loading={loading}
            />
          </View>
        </SafeAreaView>
        <AnimatedModal
          testid="resetsuccess"
          visible={success}
          onDismiss={() => {
            dispatch(authenticationSlice.actions.updatepasswordResult(false));
          }}>
          <Text style={[style.modalHeading, theme.onSurface]}>
            Check your Email
          </Text>
          <Text style={[style.modaldesc, theme.onSurface]}>
            You should have received a {forgotType} reset link in your email.
          </Text>
          <View style={style.modalBtnGroup}>
            <OutlineButton
              label="Close"
              type="primary"
              triggerclick={() => {
                dispatch(
                  authenticationSlice.actions.updatepasswordResult(false),
                );
              }}
              Customstyle={style.customStyleBtn}
              testid="closemodal"
            />
            <Button
              label="Open email"
              type="primary"
              triggerclick={openEmail}
              Customstyle={style.customStyleBtn}
              testid="openemailclient"
            />
          </View>
        </AnimatedModal>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ForgotCredentials;
