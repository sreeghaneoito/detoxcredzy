/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm, Controller} from 'react-hook-form';
import {useSelector} from 'react-redux';

import {BottomOptions, InputField} from '../../../../components';
import {style} from './CharecterForm.style';
import Header from './components/Header';
import Modals from './components/Modals';
import {useUtils} from '../../../../hooks/useUtils';
import {scoreWatcherSlice} from '../../../../redux/slices/scorewatcher.slice';
import {RootState} from '../../../../redux/store/root.reducer';
import {useForms} from '../../../../hooks/useForms';
import {onboardStep} from '../../../../enums/store.enum';

interface formType {
  transunion: string;
  equifax: string;
  experian: string;
}

const CharecterForm = () => {
  const {dispatch} = useUtils();
  const {changeonBoardPageStatus, updateProgress} = useForms();
  const {loading, dashboardData, swareport} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const {formLoader} = useSelector((State: RootState) => State.form);
  console.log(swareport?.bureaus?.transunion?.score);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      transunion:
        swareport.score || swareport?.bureaus?.transunion?.score || '',
      equifax: dashboardData?.questionnaire?.scores?.equifax || '',
      experian: dashboardData?.questionnaire?.scores?.experian || '',
    },
  });
  const onSubmit = (data: formType) => {
    const payload = {
      data: {
        transunion: data.transunion,
        equifax: data.equifax,
        experian: data.experian,
      },
      type: 'scores',
      from: 'onboard-forms',
      func: () => {},
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payload));
  };
  useEffect(() => {
    updateProgress(1);
  }, []);
  return (
    <>
      <SafeAreaView style={style.container} testID="charecter-form">
        <KeyboardAwareScrollView
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <Header />
          <View style={style.heightHalf} />
          <Controller
            name="transunion"
            control={control}
            render={({field: {onChange, value}}) => (
              <InputField
                label="Transunion"
                placeholder="000"
                changeText={onChange}
                keyboardType="number-pad"
                value={value.toString()}
                readonly={swareport.score ? true : false}
                verified={swareport.score ? true : false}
                testid="transunion"
              />
            )}
          />
          {/* {swareport?.score ? (
            <></>
          ) : (
            <>
              <Controller
                name="equifax"
                control={control}
                render={({field: {onChange, value}}) => (
                  <InputField
                    label="Equifax"
                    placeholder="000"
                    changeText={onChange}
                    keyboardType="number-pad"
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
                    label="Experian"
                    placeholder="000"
                    changeText={onChange}
                    keyboardType="number-pad"
                    value={value}
                    testid="experian"
                  />
                )}
              />
            </>
          )} */}

          <View style={style.hieghtFull} />
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <Modals />
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

export default CharecterForm;
