/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {InputField} from '../../../../../components';
import {style} from './style';
import {useTheme} from '../../../../../hooks/useTheme';
import {useOnboardFlow} from '../../../../../hooks/useOnboardFlow';

const FormTwo = () => {
  const {theme} = useTheme();
  const {updateProgress} = useOnboardFlow();
  useEffect(() => {
    updateProgress(6);
  }, []);
  return (
    <View style={style.container} testID="form-two">
      <Text style={[style.heading, theme.onSurface]}>
        What is the value of each of these? (It’s ok to estimate here)
      </Text>
      <InputField
        label="Savings Account Value"
        changeText={() => {}}
        keyboardType="number-pad"
        autofocus
      />
      <InputField
        label="Real Estate value"
        changeText={() => {}}
        keyboardType="number-pad"
      />
      <InputField
        label="Other"
        changeText={() => {}}
        keyboardType="number-pad"
      />
      <View style={[style.box, theme.secondary]}>
        <Text style={[style.value, theme.onSurface]}>$ 0</Text>
        <Text style={[style.head, theme.onSurface]}>Estimated Total</Text>
      </View>
    </View>
  );
};

export default FormTwo;
