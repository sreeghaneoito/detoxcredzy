import {View, Text, Platform} from 'react-native';
import React from 'react';
import {style} from './NetworkIndicator.style';
import {Button} from '../index';
import {Error_Modal} from '../../assets';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {useTheme} from '../../hooks/useTheme';

const NetworkIndicator = () => {
  const {theme} = useTheme();
  /**
   * Hook provided by react native netinfo
   */
  const netInfo = useNetInfo();

  /**
   * Refresh the network state of the app
   */
  const refreshNetwork = async () => {
    try {
      await NetInfo.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(netInfo.isInternetReachable);
  return (
    <>
      {netInfo.isInternetReachable === false && (
        <View style={style.container}>
          <View
            style={[
              theme.surface,
              style.card,
              Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
            ]}>
            <Text style={[style.head, theme.onSurface]}>
              No Internet Connection
            </Text>
            <Error_Modal />
            <Text style={[style.desc, theme.onSurface]}>
              Please check your connection again or connect to a wifi
            </Text>
            <Button
              type="primary"
              label="Refresh"
              triggerclick={refreshNetwork}
              Customstyle={style.customBtn}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default NetworkIndicator;
