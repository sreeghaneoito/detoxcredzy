/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './BioMetricAuth';
import {useTheme} from '../../hooks/useTheme';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import Lock from '../../assets/icons/Lock';
import RNExitApp from 'react-native-exit-app';

const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});
const BioMetricAuth = () => {
  const {theme} = useTheme();
  const [authenticated, setAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    authenticate();
  }, []);

  const authPrompt = () => {
    setShowError(false);
    rnBiometrics
      .simplePrompt({promptMessage: 'Authenticate to Credzy'})
      .then(res => {
        const {success} = res;
        if (success) {
          setAuthenticated(true);
        } else {
          setShowError(true);
          setAuthenticated(false);
        }
      });
  };

  const authenticate = async () => {
    const {biometryType} = await rnBiometrics.isSensorAvailable();
    if (biometryType === BiometryTypes.FaceID) {
      authPrompt();
    }
    if (biometryType === BiometryTypes.Biometrics) {
      authPrompt();
    }
  };
  return (
    <>
      {!authenticated && (
        <View style={[style.container, theme.background]}>
          {showError && (
            <View style={[style.card, theme.surface]}>
              <Lock />
              <Text style={[theme.onSurface, style.head]}>
                Credzy is locked
              </Text>
              <Text style={[theme.onSurface, style.desc]}>
                For your security, you can only use Credzy when it's unlocked
              </Text>
              <View style={style.bottomBox}>
                <Text
                  style={[theme.onSurface, style.btn]}
                  onPress={() => {
                    RNExitApp.exitApp();
                  }}>
                  Cancel
                </Text>
                <Text
                  style={[theme.onSurface, style.btn]}
                  onPress={authenticate}>
                  Try Again
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
    </>
  );
};

export default BioMetricAuth;
