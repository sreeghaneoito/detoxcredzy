import {View, Text} from 'react-native';
import React from 'react';
import {style} from './AnimatedDescription.style';
import {useTheme} from '../../../hooks/useTheme';

const AnimatedDescription = () => {
  const {theme} = useTheme();

  return (
    <View>
      {/* <Animated.View style={[boxStyle]} /> */}
      <Text style={[style.desc, theme.onSurface]}>
        Credit is so much more than a score, supercharge all 3 factors:{' '}
        <Text style={[style.highlight, theme.onSurface]}>Character</Text>,{' '}
        <Text style={[style.highlight, theme.onSurface]}>Capacity</Text>, and{' '}
        <Text style={[style.highlight, theme.onSurface]}>Collateral</Text>
      </Text>
    </View>
  );
};

export default AnimatedDescription;
