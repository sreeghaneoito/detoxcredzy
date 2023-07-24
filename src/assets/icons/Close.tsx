import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Close = () => {
  return (
    <>
      <Svg width="24px" height="24px" viewBox="0 0 24 24">
        <Path
          fill="none"
          stroke="#E1E2E8"
          stroke-width="2"
          d="M3,3 L21,21 M3,21 L21,3"
        />
      </Svg>
    </>
  );
};

export default Close;
