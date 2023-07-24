import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {style} from './Updatepassword.style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HeaderWithBack, InputField, Button} from '../../../components';
import {UpdatePasswordValidationSchema} from '../../../utils/schemas/validation';
import {useUtils} from '../../../hooks/useUtils';
import {authenticationSlice} from '../../../redux/slices/authentication.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/root.reducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdatePassword = () => {
  const {gotobackScreen, dispatch} = useUtils();
  const {loading} = useSelector(
    (State: RootState) => State.authentication.updatePassword,
  );
  const updatpassword = (data: any) => {
    Keyboard.dismiss();
    dispatch(
      authenticationSlice.actions.updateuserpassword({
        password: data.currentpassword,
        new_password: data.newpassword,
      }),
    );
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      currentpassword: '',
      newpassword: '',
      confirmnewpassword: '',
    },
    resolver: yupResolver(UpdatePasswordValidationSchema),
  });
  return (
    <SafeAreaView testID="updatepwd-screen">
      <KeyboardAwareScrollView
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}>
        <View style={style.container}>
          <View>
            <HeaderWithBack
              triggerClick={gotobackScreen}
              heading="Update password"
            />
            <View style={style.form}>
              <Controller
                name="currentpassword"
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => (
                  <InputField
                    label="Current Password"
                    placeholder="Enter current password"
                    changeText={onChange}
                    testid="currentpwd"
                    errortype={errors.currentpassword && 'danger'}
                    errortext={errors.currentpassword?.message}
                    password
                  />
                )}
              />
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
              label="Update Password"
              triggerclick={handleSubmit(updatpassword)}
              type="primary"
              testid="updatepwd"
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdatePassword;
