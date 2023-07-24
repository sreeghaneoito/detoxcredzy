import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';

const Profile = () => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg width="40" height="40" viewBox="0 0 40 40">
        <G
          id="Group_6883"
          data-name="Group 6883"
          transform="translate(-304.5 -744)">
          <G
            id="Group_6821"
            data-name="Group 6821"
            transform="translate(261.5 367.999)">
            <Path
              id="Path_3109"
              data-name="Path 3109"
              d="M66.53,33.7a9.9,9.9,0,0,1-7.07.005L53,36.644V40H73V36.644Z"
              transform="translate(0 364)"
              fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
            />
            <Path
              id="Path_3110"
              data-name="Path 3110"
              d="M67.328,23.43c-2.1-1.889-6.529-1.9-8.64-.015a5.334,5.334,0,0,0-.014,7.531c2.1,1.892,6.552,1.892,8.657,0a5.342,5.342,0,0,0,0-7.514m-.39,4.359a4.066,4.066,0,0,1-3.816,2.653c-.054,0-.107,0-.162,0a4.047,4.047,0,0,1-3.9-2.65,1,1,0,1,1,1.875-.7,2.078,2.078,0,0,0,2.022,1.349,2.1,2.1,0,0,0,2.1-1.349,1,1,0,0,1,1.875.7"
              transform="translate(0 364)"
              fill={currentTheme === 'dark' ? '#FFFFFF' : '#1E1F22'}
            />
          </G>
        </G>
      </Svg>
    </>
  );
};

export default Profile;
