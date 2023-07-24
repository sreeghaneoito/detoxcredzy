import React, {useState} from 'react';
import Ssn from './components/Ssn';
import Phone from './components/Phone';
import {useSelector} from 'react-redux';
import {style} from './SignupDetails.style';
import {forms} from '../../../enums/store.enum';
import {useUtils} from '../../../hooks/useUtils';
import {View, Text, SafeAreaView} from 'react-native';
import {RootState} from '../../../redux/store/root.reducer';
import {Progress, BottomOptions} from '../../../components';
import {formslice} from '../../../redux/slices/forms.slice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EncryptionNote from '../../OnboardFlow/forms/charecterForm/components/EncryptionNote';

const SignupDetails = () => {
  const {theme, dispatch, gotobackScreen} = useUtils();
  const {
    data: {form, formProgress},
    formLoader,
  } = useSelector((State: RootState) => State.form);
  const {
    updateUser: {loading},
    linktopop: {linkinloader},
  } = useSelector((State: RootState) => State.register);
  const [clicking, setClicking] = useState(true);

  const continueAction = () => {
    setClicking(!clicking);
  };
  const backAction = () => {
    if (form === forms.SSN) {
      dispatch(
        formslice.actions.setFormControl({
          data: {formProgress: 1, form: forms.PHONE},
        }),
      );
    } else {
      gotobackScreen();
    }
  };
  const some = useSelector((State: RootState) => State.form);
  console.log(some);

  return (
    <>
      <SafeAreaView testID="signupdetails-screen">
        <View style={style.container}>
          <Progress value={formProgress || 0} max={2} />
          <KeyboardAwareScrollView
            resetScrollToCoords={{x: 0, y: 0}}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View>
              <Text style={[style.head, theme.onSurface]}>Personal Info</Text>
              <Text style={[style.sub, theme.onSurface]}>
                {form === forms.PHONE && 'How Should we contact you ?'}
                {form === forms.SSN && 'Confirm your Identity'}
              </Text>
            </View>
            {form === forms.PHONE && <Phone clicking={clicking} />}
            {form === forms.SSN && <Ssn clicking={clicking} />}
            <EncryptionNote />
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
      <BottomOptions
        buttonAction={continueAction}
        ghostAction={backAction}
        ghostlabel="back"
        mainlabel="Continue"
        loading={loading || formLoader || linkinloader}
        backButtonDisabled={form === forms.PHONE}
      />
    </>
  );
};

export default SignupDetails;
