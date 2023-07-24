import React from 'react';
import {style} from './style';
import {View, Text} from 'react-native';
import {useUtils} from '../../../hooks/useUtils';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {BottomOptions, HeaderWithBack, MaskedInput} from '../../../components';
import {capacityDataValidationSchema} from '../../../utils/schemas/validation';
import {scoreWatcherSlice} from '../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';
import {dollarMask} from '../../../utils/functions/mask';

const CapacityData = () => {
  const {theme, gotobackScreen, dispatch} = useUtils();
  const {loading, dashboardData, swareport} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      debt:
        swareport.monthly_payments ||
        dashboardData?.questionnaire?.capacity?.monthly_debt ||
        '',
      income: dashboardData?.questionnaire?.capacity?.monthly_income || '',
    },
    resolver: yupResolver(capacityDataValidationSchema),
  });
  const updateDetails = (data: any) => {
    const payloaddata = {
      type: 'capacity',
      data: {
        monthly_debt: data.debt,
        monthly_income: data.income,
      },
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payloaddata));
  };
  return (
    <>
      <View style={style.container}>
        <HeaderWithBack triggerClick={gotobackScreen} />
        <View style={style.form}>
          <Text style={[theme.onSurface, style.heading]}>Capacity Data</Text>
          <Controller
            name="debt"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Monthly total debt payment"
                keyboardType="number-pad"
                errortype={(errors.debt || errors.debt) && 'danger'}
                errortext={errors.debt?.message || ''}
                value={value.toString()}
                readonly={swareport?.score ? true : false}
                verified={swareport?.score ? true : false}
                testid="debt"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="income"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Estimated Income"
                keyboardType="number-pad"
                value={value.toString()}
                testid="income"
                mask={dollarMask}
              />
            )}
          />
        </View>
        <BottomOptions
          buttonAction={handleSubmit(updateDetails)}
          ghostAction={gotobackScreen}
          ghostlabel="Back"
          mainlabel="Save"
          loading={loading}
        />
      </View>
    </>
  );
};

export default CapacityData;
