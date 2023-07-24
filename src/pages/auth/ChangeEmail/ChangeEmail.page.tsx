import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

import {style} from './ChangeEmail.style';
import {
  HeaderWithBack,
  InputField,
  SingleBottomOption,
} from '../../../components';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginValidationSchema} from '../../../utils/schemas/validation';
import {navigate} from '../../../routes/navigations';
import {routeEnum} from '../../../enums/route.enum';
import {useDispatch, useSelector} from 'react-redux';
import {authenticationSlice} from '../../../redux/slices/authentication.slice';
import {RootState} from '../../../redux/store/root.reducer';

const ChangeEmail = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(
    (State: RootState) => State.authentication.updateEmail,
  );
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
    const payload = {
      password: data.password,
      email: {
        address: data.email,
      },
    };
    dispatch(authenticationSlice.actions.updateEmail(payload));
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <HeaderWithBack
          triggerClick={() => {
            navigate(routeEnum.PROFILEPAGE);
          }}
          heading="Update Email"
        />
        <View style={style.formBox}>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange}}) => (
              <InputField
                changeText={onChange}
                label="New Email"
                keyboardType="email-address"
                placeholder="Enter the new email address"
                errortype={errors.email && 'danger'}
                errortext={errors.email?.message || ''}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field: {onChange}}) => (
              <InputField
                changeText={onChange}
                label="Current password"
                placeholder="Enter the current password"
                errortype={errors.password && 'danger'}
                errortext={errors.password?.message || ''}
                password
              />
            )}
          />
        </View>
      </View>
      <SingleBottomOption
        buttonAction={handleSubmit(onSubmit)}
        mainlabel="Update email"
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default ChangeEmail;
