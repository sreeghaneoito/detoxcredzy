/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {InputField, Button} from '../../../../components';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignupFormValidationSchema} from '../../../../utils/schemas/validation';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {registerSlice} from '../../../../redux/slices/registration.slice';
import {userSlice} from '../../../../redux/slices/user.slice';
import {useUtils} from '../../../../hooks/useUtils';
import {useToastHook} from '../../../../hooks/useToastHook';
import {utilsSlice} from '../../../../redux/slices/utils.slice';

interface Props {
  deeplinkdata: {
    email: string;
    token: string;
  };
}
const RegisterPassword = ({deeplinkdata}: Props) => {
  const {theme, dispatch} = useUtils();
  const {showToast} = useToastHook();

  const response = useSelector(
    (State: RootState) => State.register.registerPassword,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: deeplinkdata?.email || '',
      password: '',
      confirmpassword: '',
    },
    resolver: yupResolver(SignupFormValidationSchema),
  });

  const onSubmit = (data: any) => {
    if (deeplinkdata !== undefined) {
      dispatch(
        userSlice.actions.changeUserToken({
          usertoken: deeplinkdata.token,
        }),
      );
      dispatch(registerSlice.actions.registerPassword(data.password));
    } else {
      showToast(
        'It seems like your link is already used or correpted please contact credzy ',
      );
    }
  };
  useEffect(() => {
    dispatch(utilsSlice.actions.changeApploaded({apploaded: true}));
  }, []);

  return (
    <View style={style.container}>
      <Text style={[style.head, theme.onSurface]}>Let's Begin</Text>
      <Text style={[style.sub, theme.onSurface]}>
        Set your Username and Password
      </Text>
      <Controller
        name="email"
        control={control}
        render={({field: {onChange, value}}) => (
          <InputField
            label="Email"
            changeText={onChange}
            placeholder="Email"
            errortext={errors.email?.message || ''}
            errortype={errors.email && 'danger'}
            testid="email"
            keyboardType="email-address"
            value={value}
            readonly
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="New Password"
            changeText={onChange}
            placeholder="New password"
            password
            errortype={errors.password && 'danger'}
            errortext={errors.password?.message || ''}
            testid="password"
          />
        )}
      />
      <Controller
        name="confirmpassword"
        control={control}
        render={({field: {onChange}}) => (
          <InputField
            label="Re-enter Password"
            changeText={onChange}
            placeholder="Re-enter Password"
            password
            errortype={errors.confirmpassword && 'danger'}
            errortext={errors.confirmpassword?.message || ''}
            testid="confirmpassword"
          />
        )}
      />
      <Button
        label="Create Account"
        triggerclick={handleSubmit(onSubmit)}
        type="primary"
        testid="signup"
        loading={response?.loading}
      />
      <Text style={[style.passwordText, theme.onBackground]}>
        The password must contain a minimum of 8 characters, one uppercase, one
        special character and a number.
      </Text>
    </View>
  );
};

export default RegisterPassword;
