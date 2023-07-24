/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {MaskedInput} from '../../../../components';
import {style} from './style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SsnValidationSchema} from '../../../../utils/schemas/validation';
import {useUtils} from '../../../../hooks/useUtils';
import {registerSlice} from '../../../../redux/slices/registration.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {formslice} from '../../../../redux/slices/forms.slice';
interface Props {
  clicking: boolean;
}
const Ssn = ({clicking}: Props) => {
  const {userdetails} = useSelector((State: RootState) => State.user);
  const [date, setDate] = useState(new Date(userdetails?.dob || '2004-12-31'));
  const {dispatch} = useUtils();
  const [dateErrormessage, setDateErrormessage] = useState<string>();
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    handleSubmit(onSubmit)();
  }, [clicking]);

  useEffect(() => {
    if (date.getFullYear() === new Date('2005-01-01').getFullYear()) {
      setDateErrormessage('Please select a valid date');
    } else {
      setDateErrormessage('');
    }
  }, [date]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      ssn: userdetails?.ssn || '',
      dob: '',
    },
    resolver: yupResolver(SsnValidationSchema),
  });
  const onSubmit = (data: any) => {
    const rawdata: string = data.dob;
    const payload = {
      dob: `${rawdata.substring(0, 2)}/${rawdata.substring(
        2,
        4,
      )}/${rawdata.substring(4, 8)}`,
      ssn: data.ssn,
    };

    dispatch(registerSlice.actions.linkToPop(payload));
  };

  useEffect(() => {
    dispatch(formslice.actions.setFormControl({data: {formProgress: 2}}));
  }, []);

  return (
    <View testID="form-three">
      <Controller
        name="ssn"
        control={control}
        render={({field: {onChange, value}}) => (
          <MaskedInput
            label="Social Security"
            placeholder="Social Security"
            changeText={onChange}
            keyboardType="number-pad"
            autofocus
            testid="socialsecurity"
            errortext={errors.ssn?.message || ''}
            errortype={errors.ssn?.message && 'danger'}
            onlyNumbers
            mask={[
              /\d/,
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            value={value}
          />
        )}
      />
      <Controller
        name="dob"
        control={control}
        render={({field: {onChange, value}}) => (
          <MaskedInput
            label="Date of Birth"
            placeholder="MM/DD/YYYY"
            changeText={onChange}
            keyboardType="number-pad"
            testid="dateofbirth"
            errortext={errors.dob?.message}
            errortype={errors.dob?.message && 'danger'}
            onlyNumbers
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            value={value}
            showObfuscatedValue
          />
        )}
      />
      <Text style={style.privacyText}>
        Your information allows us to securely retrieve your credit scores and
        provide personalized products based on your credit profile.
      </Text>
    </View>
  );
};

export default Ssn;
