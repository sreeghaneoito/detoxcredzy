import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';

const DropdownArrow = () => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <Path
          d="M18 9H6L12 15L18 9Z"
          fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
        />
      </Svg>
    </>
  );
};

export default DropdownArrow;
