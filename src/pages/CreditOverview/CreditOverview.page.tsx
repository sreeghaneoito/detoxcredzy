import {View, SafeAreaView, Text, Pressable, Platform} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {style} from './CreditOverview.style';
import Profile from '../../assets/icons/Profile';
import {LeftGreen} from '../../assets';
import {routeEnum} from '../../enums/route.enum';
import {useUtils} from '../../hooks/useUtils';

const creditOverviewHTML =
  Platform.OS === 'ios'
    ? require('../../webview/creditOverview.html')
    : {uri: 'file:///android_asset/webview/creditOverview.html'};

const CreditOverview = () => {
  const {theme, gotoScreen, gotobackScreen} = useUtils();
  return (
    <SafeAreaView testID="creditoverview-screen">
      <View style={style.container}>
        <View>
          <View style={style.header}>
            <Pressable
              onPress={gotobackScreen}
              style={style.backBox}
              testID="back">
              <LeftGreen />
              <Text style={style.backText}>GO BACK</Text>
            </Pressable>
            <Pressable
              style={[style.profileBtn]}
              onPress={() => {
                gotoScreen(routeEnum.PROFILEPAGE);
              }}
              testID="profile">
              <Profile />
            </Pressable>
          </View>
          <Text style={[style.heading, theme.onSurface]}>Account</Text>
        </View>
        {/* <WebView originWhitelist={['*']} source={creditOverviewHTML} /> */}
        <WebView
          originWhitelist={['*']}
          source={{uri: 'https://credzy.com/'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreditOverview;
