/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {InputField, Alert} from '../../../../../components';
import {useTheme} from '../../../../../hooks/useTheme';
import {useOnboardFlow} from '../../../../../hooks/useOnboardFlow';

const FormTwo = () => {
  const {theme} = useTheme();
  const {updateProgress} = useOnboardFlow();
  useEffect(() => {
    updateProgress(4);
  }, []);
  return (
    <View style={style.container} testID="form-two">
      <View>
        <Text style={[theme.onSurface, style.question]}>
          What is your monthly debt?
        </Text>
        <InputField
          label="Monthly Total Debt Payment"
          changeText={() => {}}
          keyboardType="number-pad"
          autofocus
          testid="monthlydebt"
        />
      </View>
      <View>
        <Alert
          type="warning"
          heading="Pro Tip"
          desc="Only include your minimum monthly debt payments. Don’t include bills or expenses like utility, groceries, or rent"
        />
      </View>
    </View>
  );
};

export default FormTwo;
