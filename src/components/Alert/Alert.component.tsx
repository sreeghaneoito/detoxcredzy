import {View, Text} from 'react-native';
import React from 'react';
import {style} from './Alert.style';
import {AlertProps} from '../../interfaces/component.interface';

/**
 * Alert Component
 * @param type: Alert type it will be warning, error or success
 * @param heading: Alert Heading
 * @param desc: Alert Description
 * @returns JSX component
 */
const Alert = ({type, desc, heading}: AlertProps) => {
  try {
    return (
      <View
        style={[
          style.container,
          type === 'warning' && style.warningBg,
          type === 'error' && style.errorBg,
          type === 'success' && style.successBg,
        ]}>
        <Text
          style={[
            style.heading,
            type === 'warning' && style.warningText,
            type === 'error' && style.errorText,
            type === 'success' && style.successText,
          ]}>
          {heading}
        </Text>
        <Text
          style={[
            style.desc,
            type === 'warning' && style.warningText,
            type === 'error' && style.errorText,
            type === 'success' && style.successText,
          ]}>
          {desc}
        </Text>
      </View>
    );
  } catch (error) {
    console.log('Alert Component Crash =>', error);
    return <View style={style.container} />;
  }
};

export default Alert;
