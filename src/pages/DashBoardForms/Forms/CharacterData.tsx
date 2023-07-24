import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {useUtils} from '../../../hooks/useUtils';
import {BottomOptions, InputField, HeaderWithBack} from '../../../components';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {characterDataValidationSchema} from '../../../utils/schemas/validation';
import {scoreWatcherSlice} from '../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';

const CharacterData = () => {
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
      equifax: dashboardData?.questionnaire?.scores.equifax || '',
      experian: dashboardData?.questionnaire?.scores.experian || '',
      transunion: dashboardData?.questionnaire?.scores.transunion || '',
    },
    resolver: yupResolver(characterDataValidationSchema),
  });
  const updateData = (data: any) => {
    const payload = {
      type: 'scores',
      data: {
        equifax: data.equifax,
        experian: data.experian,
        transunion: data.transunion,
      },
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payload));
  };
  return (
    <>
      <View style={style.container}>
        <HeaderWithBack triggerClick={gotobackScreen} />
        <View style={style.form}>
          <Text style={[theme.onSurface, style.heading]}>Capital data</Text>
          <Controller
            name="equifax"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                changeText={onChange}
                label="Equifax Credit Score"
                keyboardType="number-pad"
                errortype={(errors.equifax || errors.equifax) && 'danger'}
                errortext={errors.equifax?.message || ''}
                value={value}
                testid="equifax"
              />
            )}
          />
          <Controller
            name="experian"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                changeText={onChange}
                label="Experian Credit Score"
                keyboardType="number-pad"
                errortype={(errors.experian || errors.experian) && 'danger'}
                errortext={errors.experian?.message || ''}
                value={value}
                testid="experian"
              />
            )}
          />
          <Controller
            name="transunion"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                changeText={onChange}
                label="Transunion Credit Score"
                keyboardType="number-pad"
                errortype={(errors.transunion || errors.transunion) && 'danger'}
                errortext={errors.transunion?.message || ''}
                value={value}
                testid="transunion"
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

export default CharacterData;
