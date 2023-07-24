import {View, Text} from 'react-native';
import React from 'react';
import {CredzyLogo_light, CredzyLogo_dark} from '../../../../../assets';
import {style} from '../Kba.style';
import {useUtils} from '../../../../../hooks/useUtils';

interface Props {
  desc: string;
}

const Header = ({desc}: Props) => {
  const {currentTheme, theme} = useUtils();
  return (
    <View style={style.Headercontainer}>
      {currentTheme === 'dark' ? <CredzyLogo_dark /> : <CredzyLogo_light />}
      <Text style={style.verify}>Verify your identity</Text>
      <Text style={[style.desc, theme.onSurface]}>{desc}</Text>
    </View>
  );
};

export default Header;
