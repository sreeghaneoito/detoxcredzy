import {View} from 'react-native';
import React from 'react';
import {style} from './Card.style';
import {useTheme} from '../../hooks/useTheme';
import {CardProps} from '../../interfaces/component.interface';

/**
 * Card
 * @param childred: The content inside the card
 * @returns JSX Component
 */
const Card = ({children}: CardProps) => {
  const {theme} = useTheme();
  try {
    return <View style={[style.card, theme.surface]}>{children}</View>;
  } catch (error) {
    console.log('Card Crash =>', error);
    return <View style={style.card} />;
  }
};

export default Card;
