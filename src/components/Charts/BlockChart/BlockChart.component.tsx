import {View} from 'react-native';
import React from 'react';
import {style} from './BlockChart.style';
import {useTheme} from '../../../hooks/useTheme';
import {BlockChartProps} from '../../../interfaces/component.interface';

/**
 * Block chart
 * @param max: Maximum limt of Chart
 * @param val: Current value of chart
 * @returns JSX Component
 */
const BlockChart = ({max, val}: BlockChartProps) => {
  const {currentTheme} = useTheme();

  // Convert the values to percentage
  const value = ((val || 0) * 100) / max;

  // Set bg based on the percentage
  const activeBg = {
    backgroundColor:
      value <= 40 ? '#E2002B' : value <= 60 ? '#FAC600' : '#28AF51',
  };

  const blockTheme =
    currentTheme === 'dark' ? style.blockdark : style.blocklight;

  try {
    return (
      <View style={style.container}>
        <View
          style={[
            style.block,
            blockTheme,
            style.leftblock,
            value > 0 && activeBg,
            value <= 0 && activeBg,
          ]}
        />
        <View style={[style.block, blockTheme, value >= 20 && activeBg]} />
        <View style={[style.block, blockTheme, value >= 40 && activeBg]} />
        <View style={[style.block, blockTheme, value >= 60 && activeBg]} />
        <View
          style={[
            style.block,
            blockTheme,
            style.rightblock,
            value > 80 && activeBg,
          ]}
        />
      </View>
    );
  } catch (error) {
    console.log('Blockchart crash =>', error);
    return <view style={style.container} />;
  }
};

export default BlockChart;
