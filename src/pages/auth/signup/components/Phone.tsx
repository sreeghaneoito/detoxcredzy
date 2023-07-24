/* eslint-disable react-hooks/exhaustive-deps */
import {style} from './style';
import React, {useEffect, useRef, useState} from 'react';
import Tick from '../../../../assets/icons/Tick';
import {MaskedInput} from '../../../../components';
import {useUtils} from '../../../../hooks/useUtils';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {View, Text, Pressable, Linking} from 'react-native';
import {PhoneValidationSchema} from '../../../../utils/schemas/validation';
import {registerSlice} from '../../../../redux/slices/registration.slice';
import {useToastHook} from '../../../../hooks/useToastHook';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
interface Props {
  clicking: boolean;
}
const Phone = ({clicking}: Props) => {
  const {theme, dispatch} = useUtils();
  const {showToast} = useToastHook();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {userdetails} = useSelector((State: RootState) => State.user);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      phone: userdetails?.phone?.number || '',
    },
    resolver: yupResolver(PhoneValidationSchema),
  });
  const onSubmit = (data: any) => {
    const payload = {
      data: {
        phone: {
          number: data.phone,
        },
      },
      from: 'update-phone',
    };
    if (termsAccepted) {
      dispatch(registerSlice.actions.updateUserDetails(payload));
    } else {
      showToast('Please accept terms and conditions');
    }
  };
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    handleSubmit(onSubmit)();
  }, [clicking]);

  return (
    <View testID="form-two">
      <Controller
        name="phone"
        control={control}
        render={({field: {onChange, value}}) => (
          <MaskedInput
            label="Phone"
            changeText={onChange}
            placeholder="Phone"
            keyboardType="phone-pad"
            autofocus
            testid="phone"
            errortext={errors.phone?.message}
            errortype={errors.phone?.message && 'danger'}
            value={value}
            onlyNumbers
            mask={[
              '(',
              /\d/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        )}
      />
      <Pressable
        style={[style.agreeBox, theme.surface]}
        onPress={() => {
          setTermsAccepted(!termsAccepted);
        }}
        testID="terms">
        <View>
          <View style={style.Checkbox}>
            {termsAccepted && (
              <View testID="checkbox-active">
                <Tick />
              </View>
            )}
          </View>
        </View>
        <View>
          <Text style={[theme.onSurface, style.agreeText]}>
            I agree to the "Terms of Contact" Stated below
          </Text>
        </View>
      </Pressable>
      <Text style={style.privacyText}>
        Click here to read our{' '}
        <Text
          style={style.underline}
          onPress={() => {
            Linking.openURL('https://credzy.com/terms-of-use/');
          }}
          testID="privacypolicy">
          Terms of Service
        </Text>
      </Text>
    </View>
  );
};

export default Phone;
