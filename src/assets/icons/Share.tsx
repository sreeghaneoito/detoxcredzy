import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';

const Share = () => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg width="18" height="19.92" viewBox="0 0 18 19.92">
        <G id="share" transform="translate(-3 -2)">
          <Path
            id="Path_3167"
            data-name="Path 3167"
            d="M18,6a1,1,0,1,0-1-1A1,1,0,0,0,18,6Z"
            fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
            opacity="0.3"
          />
          <Path
            id="Path_3168"
            data-name="Path 3168"
            d="M6,13a1,1,0,1,0-1-1A1,1,0,0,0,6,13Z"
            fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
            opacity="0.3"
          />
          <Path
            id="Path_3169"
            data-name="Path 3169"
            d="M18,20.02a1,1,0,1,0-1-1A1,1,0,0,0,18,20.02Z"
            fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
            opacity="0.3"
          />
          <Path
            id="Path_3170"
            data-name="Path 3170"
            d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08ZM18,4a1,1,0,1,1-1,1A1,1,0,0,1,18,4ZM6,13a1,1,0,1,1,1-1A1,1,0,0,1,6,13Zm12,7.02a1,1,0,1,1,1-1A1,1,0,0,1,18,20.02Z"
            fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
          />
        </G>
      </Svg>
    </>
  );
};

export default Share;
