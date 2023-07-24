import {View} from 'react-native';
import React from 'react';

interface Props {
  space?: number;
  bg?: string;
}
/**
 * Give Adjustive space on the UI components and screens
 * @param space Number amount of space you want to display
 * @returns JSX element
 */
const Spacer = ({space, bg}: Props) => {
  return (
    <>
      <View
        style={{height: space || 0, backgroundColor: bg || 'transparent'}}
      />
    </>
  );
};

export default Spacer;
