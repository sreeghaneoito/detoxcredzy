import {View, Text, Linking} from 'react-native';
import React from 'react';
import {style} from '../Kba.style';
import {useUtils} from '../../../../../hooks/useUtils';
import Ssl from '../../../../../assets/icons/Ssl';

const EncryptionNote = () => {
  const {theme} = useUtils();
  return (
    <View>
      <Text style={[style.sslnote]}>
        <Text style={[theme.onSurface, style.sslhightlight]}>
          <Ssl /> SSL Encryption
        </Text>{' '}
        we use Secure Sockets Layer (SSL) encryption on all pages where personal
        information is collected. See{' '}
        <Text
          style={style.policy}
          onPress={() => {
            Linking.openURL('https://credzy.com/privacy-policy/');
          }}>
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
};

export default EncryptionNote;
