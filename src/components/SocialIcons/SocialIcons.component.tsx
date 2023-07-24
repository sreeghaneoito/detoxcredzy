import {View, Pressable} from 'react-native';
import React from 'react';
// import Instagram from '../../assets/icons/Instagram';
// import Facebook from '../../assets/icons/Facebook';
// import Twitter from '../../assets/icons/Twitter';
import {style} from './SocialIcon.style';
import LeftArrow from '../../assets/icons/LeftArrow';
// import {useNavigation} from '@react-navigation/native';
import {useUtils} from '../../hooks/useUtils';
import {routeEnum} from '../../enums/route.enum';
const SocialIcons = () => {
  const {gotoScreen} = useUtils();

  // * this will be in use after the client give the details
  // const socialURL = {
  //   instagram: 'https://instagram.com/',
  //   facebook: 'https://facebook.com/',
  //   twitter: 'https://twitter.com/',
  // };
  // const openURL = async (url: string) => {
  //   await Linking.openURL(url);
  // };
  return (
    <View style={style.container}>
      <Pressable
        style={style.back}
        onPress={() => {
          gotoScreen(routeEnum.DASHBOARDTAB);
        }}
        testID="goback">
        <LeftArrow />
      </Pressable>
      {/* <Pressable
        style={style.btn}
        testID="instagram"
        onPress={() => {
          openURL(socialURL.instagram);
        }}>
        <Instagram />
      </Pressable>
      <Pressable
        style={style.btn}
        testID="facebook"
        onPress={() => {
          openURL(socialURL.facebook);
        }}>
        <Facebook />
      </Pressable>
      <Pressable
        style={style.btn}
        testID="twitter"
        onPress={() => {
          openURL(socialURL.twitter);
        }}>
        <Twitter />
      </Pressable> */}
    </View>
  );
};

export default SocialIcons;
