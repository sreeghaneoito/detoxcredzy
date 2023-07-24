import {View} from 'react-native';
import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const Chat = () => {
  return (
    <View style={{marginRight: 8}}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <G clip-path="url(#clip0_960_2755)">
          <Path
            d="M19.5871 2H3.07912C1.9442 2 1.01562 2.9 1.01562 4V22L5.14261 18H19.5871C20.722 18 21.6505 17.1 21.6505 16V4C21.6505 2.9 20.722 2 19.5871 2Z"
            fill="#28AF51"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_960_2755">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default Chat;
