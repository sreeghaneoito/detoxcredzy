import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm, Controller} from 'react-hook-form';

import {style} from './Kba.style';
import {BottomOptions, InputField} from '../../../../components';
import Header from './partials/Header';
import EncryptionNote from './partials/EncryptionNote';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {yupResolver} from '@hookform/resolvers/yup';
import {createSwaValidationSchema} from '../../../../utils/schemas/validation';
import {kbaSlice} from '../../../../redux/slices/kba.slice';
import {routeEnum} from '../../../../enums/route.enum';
import {navigate} from '../../../../routes/navigations';

const KbaHome = () => {
  const {userdetails} = useSelector((State: RootState) => State.user);
  const {
    createkba: {loading},
  } = useSelector((State: RootState) => State.kba);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      first_name: userdetails?.name?.first || '',
      last_name: userdetails?.name?.last || '',
      street: '',
      city: '',
      state: '',
      zip_code: '',
    },
    resolver: yupResolver(createSwaValidationSchema),
  });

  const onSubmit = (data: any) => {
    const payload = {
      ssn: userdetails?.ssn,
      first_name: userdetails?.name?.first || '',
      last_name: userdetails?.name?.last || '',
      dob: userdetails?.dob,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip_code,
      },
    };
    dispatch(kbaSlice.actions.createSwa(payload));
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}>
        <Header desc=" Let’s get your credit score directly from the credit bureaus" />
        <View style={style.container}>
          <View style={style.formContainer} testID="form-one">
            <Controller
              name="first_name"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  label="First Name (Legal)"
                  placeholder="jeff"
                  changeText={onChange}
                  autofocus
                  testid="firstname"
                  value={value}
                  readonly
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  label="Last Name"
                  placeholder="Hill"
                  changeText={onChange}
                  testid="lastname"
                  value={value}
                  readonly
                />
              )}
            />
            <Controller
              name="street"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  label="Street address"
                  placeholder="Some Address 100 W 200 S"
                  changeText={onChange}
                  testid="street"
                  value={value}
                  errortype={errors.street?.message && 'danger'}
                  errortext={errors.street?.message || ''}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputField
                  label="City"
                  placeholder="Hurricane"
                  changeText={onChange}
                  testid="city"
                  value={value}
                  errortype={errors.city?.message && 'danger'}
                  errortext={errors.city?.message || ''}
                />
              )}
            />

            <View style={style.pincodeContainer}>
              <View style={style.stateBox}>
                <Controller
                  name="state"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <InputField
                      label="State"
                      placeholder="Hurricane"
                      changeText={onChange}
                      testid="state"
                      value={value}
                      errortype={errors.state?.message && 'danger'}
                      errortext={errors.state?.message || ''}
                    />
                  )}
                />
              </View>
              <View style={style.zipBox}>
                <Controller
                  name="zip_code"
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <InputField
                      label="Zip code"
                      placeholder="66666"
                      changeText={onChange}
                      keyboardType="number-pad"
                      testid="zip"
                      value={value}
                      errortype={errors.zip_code?.message && 'danger'}
                      errortext={errors.zip_code?.message || ''}
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <EncryptionNote />
        </View>
      </KeyboardAwareScrollView>
      <BottomOptions
        buttonAction={handleSubmit(onSubmit)}
        ghostAction={() => {
          navigate(routeEnum.SIGNUPDETAILS);
        }}
        ghostlabel="Back"
        mainlabel="Continue"
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default KbaHome;
