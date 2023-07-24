/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {BottomOptions, MaskedInput} from '../../../../components';
import {style} from './capacityForm.style';
import {useForm, Controller} from 'react-hook-form';
import {useUtils} from '../../../../hooks/useUtils';
import {scoreWatcherSlice} from '../../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {useForms} from '../../../../hooks/useForms';
import {onboardStep} from '../../../../enums/store.enum';
import {dollarMask} from '../../../../utils/functions/mask';

interface formType {
  debt: string;
  income: string;
}
const CapacityForm = () => {
  const {dispatch} = useUtils();
  const {changeonBoardPageStatus} = useForms();
  const {loading, dashboardData, swareport} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {formLoader} = useSelector((State: RootState) => State.form);
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
  });
  const onSubmit = (data: formType) => {
    const payload = {
      data: {
        monthly_debt: data.debt,
        monthly_income: data.income,
      },
      type: 'capacity',
      from: 'onboard-forms',
      func: () => {},
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payload));
  };

  return (
    <>
      <SafeAreaView style={style.container} testID="capacityform">
        <ScrollView>
          <Controller
            name="debt"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                label="Monthly Total Debt Payment"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
                value={value.toString()}
                readonly={swareport.monthly_payments ? true : false}
                verified={swareport.monthly_payments ? true : false}
                testid="debt"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="income"
            control={control}
            render={({field: {onChange, value}}) => (
              <>
                <MaskedInput
                  label="Estimated Monthly Income"
                  placeholder="000"
                  changeText={onChange}
                  keyboardType="number-pad"
                  value={value.toString()}
                  testid="income"
                  mask={dollarMask}
                />
              </>
            )}
          />
        </ScrollView>
      </SafeAreaView>
      <BottomOptions
        ghostAction={() => {
          changeonBoardPageStatus(onboardStep.WELCOME);
        }}
        buttonAction={handleSubmit(onSubmit)}
        mainlabel="continue"
        ghostlabel="back"
        loading={loading || formLoader}
      />
    </>
  );
};

export default CapacityForm;
