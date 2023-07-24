import {SafeAreaView} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../components';
import RegsiterPassword from './components/RegisterPassword';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useUtils} from '../../../hooks/useUtils';

const SignupPage = () => {
  const {route} = useUtils();
  return (
    <SafeAreaView testID="signup-screen">
      <AppHeader type="none" />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <RegsiterPassword deeplinkdata={route?.params} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;
