/* eslint-disable react-hooks/exhaustive-deps */
import {View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {BottomOptions, MaskedInput} from '../../../../components';
import {style} from './Capital.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm, Controller} from 'react-hook-form';
import {useUtils} from '../../../../hooks/useUtils';
import {scoreWatcherSlice} from '../../../../redux/slices/scorewatcher.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {useForms} from '../../../../hooks/useForms';
import {onboardStep} from '../../../../enums/store.enum';
import {dollarMask} from '../../../../utils/functions/mask';
interface formType {
  savings: string;
  f401k: string;
  stock: string;
  real_estate: string;
  other: string;
}
const CapitalForm = () => {
  const {dispatch} = useUtils();
  const {changeonBoardPageStatus, updateProgress} = useForms();
  const {loading, dashboardData} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {formLoader} = useSelector((State: RootState) => State.form);
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
  });
  const onSubmit = (data: formType) => {
    const payload = {
      data: {
        savings: data.savings,
        f401k: data.f401k,
        stocks_and_bonds: data.stock,
        real_estate: data.real_estate,
        other: data.other,
      },
      type: 'capital',
      from: 'onboard-forms',
      func: () => {},
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payload));
  };
  useEffect(() => {
    updateProgress(2);
  }, []);
  return (
    <SafeAreaView testID="capital-form">
      <View style={style.container}>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <Controller
            name="savings"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                label="Savings"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
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
                label="401 K"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
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
                label="Stock And Bonds Value"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
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
                label="Real Estate Value"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
                value={value}
                testid="realestate"
                mask={dollarMask}
              />
            )}
          />
          <Controller
            name="other"
            control={control}
            render={({field: {onChange, value}}) => (
              <MaskedInput
                label="Other Value"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
                value={value.toString()}
                testid="other"
                mask={dollarMask}
              />
            )}
          />
        </KeyboardAwareScrollView>
        <BottomOptions
          ghostAction={() => {
            changeonBoardPageStatus(onboardStep.WELCOME);
          }}
          buttonAction={handleSubmit(onSubmit)}
          mainlabel="continue"
          ghostlabel="back"
          loading={loading || formLoader}
        />
      </View>
    </SafeAreaView>
  );
};

export default CapitalForm;
