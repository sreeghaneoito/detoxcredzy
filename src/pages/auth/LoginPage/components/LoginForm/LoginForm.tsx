import React from 'react';
import {Text, View} from 'react-native';
import {style} from './LoginForm.style';
import {useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {useUtils} from '../../../../../hooks/useUtils';
import {routeEnum} from '../../../../../enums/route.enum';
import {InputField, Button} from '../../../../../components';
import {RootState} from '../../../../../redux/store/root.reducer';
import {authenticationSlice} from '../../../../../redux/slices/authentication.slice';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginValidationSchema} from '../../../../../utils/schemas/validation';

const LoginForm = () => {
  const {theme, dispatch, gotoScreen} = useUtils();
  const toForgotCredentials = (forgotType: String) => {
    gotoScreen(routeEnum.FORGOTCREDENTIALS, {forgotType});
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginValidationSchema),
  });
  const onSubmit = (data: any) => {
    dispatch(authenticationSlice.actions.login(data));
  };
  const {loading} = useSelector(
    (State: RootState) => State.authentication.login,
  );
  return (
    <View style={style.container}>
      <Text style={[style.heading, theme.onBackground]}>Let’s Begin</Text>
      <Text style={[style.desc, theme.onBackground]}>
        Login To Open Your Account
      </Text>
      <Controller
        name="email"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="Email"
            placeholder="Enter your email"
            changeText={onChange}
            testid="username"
            errortype={(errors.password || errors.email) && 'danger'}
            errortext={errors.email?.message || ''}
            keyboardType="email-address"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="Password"
            placeholder="Enter your password"
            password
            changeText={onChange}
            testid="password"
            errortype={errors.password && 'danger'}
            errortext={errors.password?.message}
          />
        )}
      />

      <View>
        <Button
          label="Login"
          type="primary"
          triggerclick={handleSubmit(onSubmit)}
          testid="signin"
          loading={loading}
        />
      </View>
      <View style={style.forgotContainer}>
        {/* <Text
          style={style.forgotText}
          onPress={() => {
            // toForgotCredentials('username');
          }}
          testID="forgot-username">
          Forgot username
        </Text>
        <View style={style.divider} /> */}
        <Text
          style={style.forgotText}
          onPress={() => {
            toForgotCredentials('password');
          }}
          testID="forgot-password">
          Reset Password
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
