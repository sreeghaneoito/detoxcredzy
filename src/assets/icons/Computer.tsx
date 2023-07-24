import {View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Computer = () => {
  return (
    <View style={{marginRight: 8}}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z"
          fill="#28AF51"
        />
      </Svg>
    </View>
  );
};

export default Computer;
