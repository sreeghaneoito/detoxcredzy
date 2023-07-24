import {View, Text} from 'react-native';
import React from 'react';
import {style} from './DevPreviewBanner.style';
import {Appconfig} from '../../config/config';

/**
 * Dev Preview Banner
 * Shows if you are on Dev enviornment or not
 * @returns JSX Component
 */
const DevPreviewBanner = () => {
  const {BASE_URL} = Appconfig;
  return (
    <>
      {BASE_URL.includes('dev') && (
        <View style={style.container}>
          <Text>Dev Preview</Text>
        </View>
      )}
    </>
  );
};

export default DevPreviewBanner;
