import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../hooks/useTheme';
interface Props {
  fillColor?: string | boolean;
}
const RightArrow = ({fillColor}: Props) => {
  const {currentTheme} = useTheme();
  return (
    <>
      <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
          fill={
            fillColor
              ? fillColor
              : currentTheme === 'dark'
              ? '#FFFFFF'
              : '#1E1F22'
          }
        />
      </Svg>
    </>
  );
};

export default RightArrow;
