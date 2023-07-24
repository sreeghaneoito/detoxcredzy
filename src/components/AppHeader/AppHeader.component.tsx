import {View, Pressable, Text} from 'react-native';
import React from 'react';
import {style} from './AppHeader.style';
import Share from '../../assets/icons/Share';
import Profile from '../../assets/icons/Profile';
import {routeEnum} from '../../enums/route.enum';
import {SharedElement} from 'react-navigation-shared-element';
import {
  CredzyLogo_light,
  CredzyLogo_dark,
  CredzyLogo_light_small,
  CredzyLogo_dark_small,
} from '../../assets';
import {useUtils} from '../../hooks/useUtils';
import {AppHeaderProps} from '../../interfaces/component.interface';

/**
 * App Header
 * @param type: Appheader type it will be withnumber, withprofile or withback
 * @param testid: Testid for automation
 * @returns JSX Component
 */
const AppHeader = ({type, testid}: AppHeaderProps) => {
  const {theme, currentTheme, makecall, gotoScreen, gotobackScreen} =
    useUtils();
  try {
    return (
      <View style={style.container}>
        <View>
          {currentTheme === 'dark' ? (
            type === 'withProfile' ? (
              <CredzyLogo_dark_small />
            ) : (
              <CredzyLogo_dark />
            )
          ) : type === 'withProfile' ? (
            <CredzyLogo_light_small />
          ) : (
            <CredzyLogo_light />
          )}
        </View>
        {type === 'withProfile' && (
          <View style={style.btnGroup}>
            <SharedElement id="header">
              <Pressable
                style={[style.btn]}
                onPress={() => {
                  gotoScreen(routeEnum.SHAREINFO, {
                    item: 'header',
                  });
                }}
                testID={`${testid}share`}>
                <Share />
              </Pressable>
            </SharedElement>
            <Pressable
              testID={`${testid}profile`}
              style={[style.btn, theme.surface]}
              onPress={() => {
                gotoScreen(routeEnum.PROFILEPAGE);
              }}>
              <Profile />
            </Pressable>
          </View>
        )}
        {type === 'withNumber' && (
          <Pressable
            onPress={() => {
              makecall('tel:+1(800)-215-5212');
            }}
            testID={`${testid}helptext`}>
            <Text style={style.number}>Need Help? </Text>
            <Text style={style.number}>(800) 215-5212</Text>
          </Pressable>
        )}
        {type === 'withback' && (
          <Text style={style.number} onPress={gotobackScreen} testID="goback">
            Go back
          </Text>
        )}
      </View>
    );
  } catch (error) {
    console.log('Appheader component crash =>', error);
    return <View style={style.container} />;
  }
};

export default AppHeader;
