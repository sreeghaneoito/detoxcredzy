import {View, Pressable, Text} from 'react-native';
import React from 'react';
import {style} from './AppHeader.style';
import LeftArrow from '../../assets/icons/LeftArrow';
import {useTheme} from '../../hooks/useTheme';
import {HeaderwithBackProps} from '../../interfaces/component.interface';

/**
 * Header with Back
 * @param triggerClick: The function that trigger on icon click
 * @param heading: The heading of the header
 * @returns JSX Component
 */
const HeaderWithBack = ({triggerClick, heading}: HeaderwithBackProps) => {
  const {theme} = useTheme();
  try {
    return (
      <View style={style.backContainer}>
        <Pressable onPress={triggerClick} style={style.backbtn} testID="goback">
          <LeftArrow />
        </Pressable>
        <Text style={[style.headerText, theme.onSurface]}>{heading}</Text>
      </View>
    );
  } catch (error) {
    console.log('Headerwith Back Component Crash => ', error);
    return <View style={style.backContainer} />;
  }
};

export default HeaderWithBack;
