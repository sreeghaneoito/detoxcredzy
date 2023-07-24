import {View, Text} from 'react-native';
import React from 'react';
import {CredzyLogo_light, CredzyLogo_dark} from '../../../../../assets';
import {style} from './style';
import {useUtils} from '../../../../../hooks/useUtils';

const Header = () => {
  const {currentTheme, theme} = useUtils();
  return (
    <View style={style.container}>
      {currentTheme === 'dark' ? <CredzyLogo_dark /> : <CredzyLogo_light />}
      <Text style={style.verify}>Verify your identity</Text>
      <Text style={[style.desc, theme.onSurface]}>
        Let’s get your credit score directly from the credit bureaus
      </Text>
    </View>
  );
};

export default Header;
