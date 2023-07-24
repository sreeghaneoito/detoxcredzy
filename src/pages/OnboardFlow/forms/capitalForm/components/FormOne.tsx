/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {CheckBoxGroup} from '../../../../../components';
import {checkboxData} from '../../../../../utils/dummydata/data';
import {style} from './style';
import {useOnboardFlow} from '../../../../../hooks/useOnboardFlow';

const FormOne = () => {
  const {updateProgress} = useOnboardFlow();
  useEffect(() => {
    updateProgress(5);
  }, []);
  return (
    <View style={style.container} testID="form-one">
      <CheckBoxGroup
        label={'Do you have any of the following? Select all that apply.'}
        checkboxdata={checkboxData}
        testid="capitalcheckbox"
      />
    </View>
  );
};

export default FormOne;
