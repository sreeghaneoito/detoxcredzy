import {View} from 'react-native';
import React from 'react';
import OverlayBubbles from '../components/OverlayBubble/OverlayBubble.component';

/**
 * This is the common used Higher order component for the dashboard animation.
 * For use this just wrap the entire screen with the HOC
 * @param BodyContainer the screen that the animation should be implemented
 * @returns Jsx element
 */
export const withSphere = ({BodyContainer}: {BodyContainer: any}) => {
  return () => {
    return (
      <View>
        <OverlayBubbles>
          <BodyContainer />
        </OverlayBubbles>
      </View>
    );
  };
};
