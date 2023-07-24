import {View, Text, Platform} from 'react-native';
import React from 'react';
import {style} from './Card.style';
import {useTheme} from '../../../../hooks/useTheme';
import {useForms} from '../../../../hooks/useForms';

const Card = () => {
  const {theme, font, currentTheme} = useTheme();
  const {onboardState} = useForms();
  const themeSwitch = currentTheme === 'dark' ? style.bardark : style.barlight;
  return (
    <View
      style={[
        style.card,
        Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
        theme.surfaceExtend,
      ]}>
      <Text style={[theme.onSurface, font.gotham, style.head]}>
        {onboardState}
      </Text>
      <Text style={[theme.onSurface, style.question]}>?</Text>
      <View style={style.barConatiner}>
        <View style={[style.bar, themeSwitch, style.active, style.leftblock]} />
        <View style={[style.bar, themeSwitch, style.active]} />
        <View style={[style.bar, themeSwitch]} />
        <View style={[style.bar, themeSwitch, style.rightblock]} />
      </View>
    </View>
  );
};

export default Card;
