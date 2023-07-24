import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {useUtils} from '../../../hooks/useUtils';
import {BottomOptions, HeaderWithBack, MaskedInput} from '../../../components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {capitalDataValidationSchema} from '../../../utils/schemas/validation';
import {scoreWatcherSlice} from '../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';
import {dollarMask} from '../../../utils/functions/mask';

const CapitalData = () => {
  const {theme, gotobackScreen, dispatch} = useUtils();
  const {loading, dashboardData} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      f401k: dashboardData?.questionnaire?.capital?.f401k || '',
      other: dashboardData?.questionnaire?.capital?.other || '',
      savings: dashboardData?.questionnaire?.capital?.savings || '',
      stock: dashboardData?.questionnaire?.capital?.stocks_and_bonds || '',
      real_estate: dashboardData?.questionnaire?.capital?.real_estate || '',
    },
    resolver: yupResolver(capitalDataValidationSchema),
  });
  const updateData = (data: any) => {
    const payload = {
      type: 'capital',
      data: {
        none: false,
        f401k: data.f401k,
        other: data.other,
        savings: data.savings,
        real_estate: data.real_estate,
        stocks_and_bonds: data.stock,
      },
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payload));
  };
  return (
    <>
      <View style={style.container}>
        <HeaderWithBack triggerClick={gotobackScreen} />
        <View style={style.form}>
          <Text style={[theme.onSurface, style.heading]}>Capital Data</Text>
          <Controller
            name="savings"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Savings Account Value"
                keyboardType="number-pad"
                errortype={(errors.savings || errors.savings) && 'danger'}
                errortext={errors.savings?.message || ''}
                value={value.toString()}
                testid="savings"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="f401k"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="401K Value"
                keyboardType="number-pad"
                errortype={(errors.f401k || errors.f401k) && 'danger'}
                errortext={errors.f401k?.message || ''}
                value={value.toString()}
                testid="f401k"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="stock"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Stocks And Bonds value"
                keyboardType="number-pad"
                errortype={(errors.stock || errors.stock) && 'danger'}
                errortext={errors.stock?.message || ''}
                value={value.toString()}
                testid="stock"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="real_estate"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Real Estate Value"
                keyboardType="number-pad"
                errortype={
                  (errors.real_estate || errors.real_estate) && 'danger'
                }
                errortext={errors.real_estate?.message || ''}
                value={value.toString()}
                testid="real_estate"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="other"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                changeText={onChange}
                label="Other Value"
                keyboardType="number-pad"
                errortype={(errors.other || errors.other) && 'danger'}
                errortext={errors.other?.message || ''}
                value={value.toString()}
                testid="other"
                mask={dollarMask}
              />
            )}
          />
        </View>
        <BottomOptions
          buttonAction={handleSubmit(updateData)}
          ghostAction={gotobackScreen}
          ghostlabel="Back"
          mainlabel="Save"
          loading={loading}
        />
      </View>
    </>
  );
};

export default CapitalData;
