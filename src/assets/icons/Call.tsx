import React from 'react';
import {View} from 'react-native';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const Call = () => {
  return (
    <View style={{marginRight: 8}}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <G clip-path="url(#clip0_960_2750)">
          <Path
            d="M20.0031 15.38C18.7341 15.38 17.5063 15.18 16.3611 14.82C15.9999 14.7 15.5976 14.79 15.319 15.06L13.6992 17.03C10.7793 15.68 8.04519 13.13 6.59043 10.2L8.60233 8.54C8.8809 8.26 8.96344 7.87 8.84995 7.52C8.4682 6.41 8.27217 5.22 8.27217 3.99C8.27217 3.45 7.80789 3 7.25074 3H3.6809C3.12376 3 2.45312 3.24 2.45312 3.99C2.45312 13.28 10.4285 21 20.0031 21C20.7357 21 21.0246 20.37 21.0246 19.82V16.37C21.0246 15.83 20.5603 15.38 20.0031 15.38Z"
            fill="#28AF51"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_960_2750">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default Call;
