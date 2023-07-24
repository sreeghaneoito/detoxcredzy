import React, {useEffect} from 'react';
import {style} from './style';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {useUtils} from '../../../../hooks/useUtils';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {InputField, Button} from '../../../../components';
import {RootState} from '../../../../redux/store/root.reducer';
import {registerSlice} from '../../../../redux/slices/registration.slice';
import {RegisterEmailValidationSchema} from '../../../../utils/schemas/validation';
import EncryptionNote from '../../../OnboardFlow/forms/charecterForm/components/EncryptionNote';
import {userSlice} from '../../../../redux/slices/user.slice';

const RegisterEmail = () => {
  const {theme, dispatch} = useUtils();
  const {loading} = useSelector(
    (State: RootState) => State.register.registerEmail,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
    },
    resolver: yupResolver(RegisterEmailValidationSchema),
  });
  const onSubmit = (data: any) => {
    dispatch(registerSlice.actions.registerEmail(data));
  };
  useEffect(() => {
    dispatch(userSlice.actions.flushState({}));
  }, []);

  return (
    <View style={style.container}>
      <Text style={[style.head, theme.onSurface]}>Let's Begin</Text>
      <Text style={[style.sub, theme.onSurface]}>Register Your Account</Text>
      <Controller
        name="email"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="Email"
            changeText={onChange}
            placeholder="Email"
            errortext={errors.email?.message || ''}
            errortype={errors.email && 'danger'}
            testid="email"
            keyboardType="email-address"
          />
        )}
      />
      <Controller
        name="firstname"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="First Name"
            changeText={onChange}
            placeholder="First Name"
            errortype={errors.firstname && 'danger'}
            errortext={errors.firstname?.message || ''}
            testid="firstname"
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="Last Name"
            changeText={onChange}
            placeholder="Last Name"
            errortype={errors.lastname && 'danger'}
            errortext={errors.lastname?.message || ''}
            testid="lastname"
          />
        )}
      />

      <Button
        label="Create Account"
        triggerclick={handleSubmit(onSubmit)}
        type="primary"
        testid="signup"
        loading={loading}
      />
      <EncryptionNote />
    </View>
  );
};

export default RegisterEmail;
