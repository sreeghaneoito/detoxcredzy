import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {style} from './NewPassword.style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputField, Button, AppHeader} from '../../../components';
import {NewPasswordValidationSchema} from '../../../utils/schemas/validation';
import {useUtils} from '../../../hooks/useUtils';
import {authenticationSlice} from '../../../redux/slices/authentication.slice';
import {userSlice} from '../../../redux/slices/user.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';
interface Props {
  deeplinkdata: {
    email: string;
    token: string;
  };
}
const UpdatePassword = () => {
  const {dispatch, route} = useUtils();
  const deeplinkdata: any = route.params;
  const {loading} = useSelector(
    (State: RootState) => State.authentication.updatePassword,
  );

  const updatpassword = (data: any) => {
    Keyboard.dismiss();
    dispatch(
      userSlice.actions.changeUserToken({usertoken: deeplinkdata.token}),
    );
    dispatch(
      authenticationSlice.actions.updatepasswordwithtoken(data.newpassword),
    );
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      newpassword: '',
      confirmnewpassword: '',
    },
    resolver: yupResolver(NewPasswordValidationSchema),
  });
  return (
    <SafeAreaView testID="updatepwd-screen">
      <KeyboardAvoidingView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View>
            <AppHeader type="withNumber" />
            <View style={style.form}>
              <Controller
                name="newpassword"
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => (
                  <InputField
                    label="New Password"
                    placeholder="Enter new password"
                    changeText={onChange}
                    testid="newpwd"
                    errortype={errors.newpassword && 'danger'}
                    errortext={errors.newpassword?.message}
                    password
                  />
                )}
              />
              <Controller
                name="confirmnewpassword"
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => (
                  <InputField
                    label="Confirm New Password"
                    placeholder="Enter new password again"
                    changeText={onChange}
                    testid="confirmpwd"
                    errortype={errors.confirmnewpassword && 'danger'}
                    errortext={errors.confirmnewpassword?.message}
                    password
                  />
                )}
              />

              <Text style={style.description}>
                Password must contain at least 8 characters, a special
                character, a number, and an uppercase letter.
              </Text>
            </View>
          </View>
          <View style={style.btnContainer}>
            <Button
              label="set new Password"
              triggerclick={handleSubmit(updatpassword)}
              type="primary"
              testid="updatepwd"
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UpdatePassword;
