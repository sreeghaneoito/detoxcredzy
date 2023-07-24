import React, {ErrorInfo} from 'react';
import {Text, View, ViewStyle} from 'react-native';

const CONTAINER: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: '#ffffff',
};

export interface ErrorComponentProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View style={CONTAINER}>
      <Text>{props.error}</Text>
      <Text>{props.errorInfo}</Text>
    </View>
  );
};
