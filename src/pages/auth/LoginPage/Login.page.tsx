import {style} from './Login.style';
import React from 'react';
import {LoginForm} from './components';
import {AppHeader} from '../../../components';
import {useUtils} from '../../../hooks/useUtils';
import {routeEnum} from '../../../enums/route.enum';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Loginpage = () => {
  const {gotoScreen, theme} = useUtils();
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={style.container} testID="login-screen">
          <View>
            <AppHeader type="withNumber" testid="login" />
            <LoginForm />
          </View>
          <Pressable
            style={style.backBox}
            onPress={() => {
              gotoScreen(routeEnum.ONBOARD);
            }}>
            <Text style={[style.backText, theme.onSurface]}>Go back</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Loginpage;
