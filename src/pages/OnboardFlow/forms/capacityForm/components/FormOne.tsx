/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {InputField} from '../../../../../components';
import {useTheme} from '../../../../../hooks/useTheme';
import {useOnboardFlow} from '../../../../../hooks/useOnboardFlow';

const FormOne = () => {
  const {theme} = useTheme();
  const {updateProgress} = useOnboardFlow();
  useEffect(() => {
    updateProgress(3);
  }, []);
  return (
    <View style={style.container} testID="form-one">
      <View>
        <Text style={[theme.onSurface, style.question]}>
          What is your monthly income?
        </Text>
        <InputField
          label="Estimated Monthly Income"
          changeText={() => {}}
          keyboardType="number-pad"
          autofocus
          testid="monthlyincome"
        />
        <Text style={style.helpText}>It's ok to estimate here</Text>
      </View>
    </View>
  );
};

export default FormOne;
