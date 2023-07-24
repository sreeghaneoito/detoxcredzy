import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';

const PasswordVisible = () => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg id="visibility_off-24px" width="24" height="24" viewBox="0 0 24 24">
        <Path
          id="Path_837"
          data-name="Path 837"
          d="M0,0H24V24H0ZM0,0H24V24H0ZM0,0H24V24H0ZM0,0H24V24H0Z"
          fill="none"
        />
        <G transform="translate(0 -0.5)">
          <Path
            id="Path_6231"
            data-name="Path 6231"
            d="M12,6.5A9.77,9.77,0,0,1,20.82,12,9.822,9.822,0,0,1,3.18,12,9.77,9.77,0,0,1,12,6.5Zm0-2A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5Zm0,5A2.5,2.5,0,1,1,9.5,12,2.5,2.5,0,0,1,12,9.5Zm0-2A4.5,4.5,0,1,0,16.5,12,4.507,4.507,0,0,0,12,7.5Z"
            fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
          />
        </G>
      </Svg>
    </>
  );
};

export default PasswordVisible;
