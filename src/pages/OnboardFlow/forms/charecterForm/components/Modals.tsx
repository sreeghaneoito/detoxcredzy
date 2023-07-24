import {View, Text} from 'react-native';
import React from 'react';
import {AnimatedModal, Button} from '../../../../../components';
import {Success_Modal} from '../../../../../assets';
import {style} from './style';

const Modals = () => {
  return (
    <View testID="errormodal">
      <AnimatedModal visible={false}>
        <Success_Modal />
        <Text style={style.modalHead}>Oops!</Text>
        <Text style={style.modalDesc}>
          We couldn’t find your credit profile with that information. Let’s try
          re-entering your information in case there was a typo.
        </Text>
        <Button
          type="primary"
          label="Re-enter info"
          triggerclick={() => {}}
          Customstyle={style.modalCustomBtn}
          testid="reenter"
        />
      </AnimatedModal>
    </View>
  );
};

export default Modals;
