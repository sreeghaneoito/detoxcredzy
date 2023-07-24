import {SafeAreaView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../components';
import RegisterEmail from './components/RegisterEmail';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const RegisterEmailPage = () => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <AppHeader type="withback" />
        <RegisterEmail />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterEmailPage;
