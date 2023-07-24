import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';

const Info = () => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg width="21px" height="21px" viewBox="0 0 24 24">
        <Path
          fill="none"
          stroke={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
          stroke-width="3"
          d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,10 L12,18 M12,6 L12,8"
        />
      </Svg>
    </>
  );
};

export default Info;
