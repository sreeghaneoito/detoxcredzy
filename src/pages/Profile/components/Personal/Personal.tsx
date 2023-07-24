/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import VersionInfo from 'react-native-version-info';
import {style} from '../style';
import {personal} from '../routes';
import {useUtils} from '../../../../hooks/useUtils';
import ThemeToggle from '../ThemeToggler/ThemeToggle';
import RightArrow from '../../../../assets/icons/RightArrow';
import Card from '../../../../components/Card/Card.component';
import {View, Text, FlatList, Pressable, Platform, Linking} from 'react-native';
import {userDetails} from '../../../../interfaces/apiresponse.interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {Button} from '../../../../components';

interface Props {
  details: userDetails;
}
const Personal = ({details}: Props) => {
  const {theme, gotoScreen} = useUtils();
  const [showUpdateBox, setShowUpdateBox] = useState(false);

  const {user_goal} = useSelector(
    (State: RootState) => State.scoreWatcher.dashboardData,
  );
  const {appdetails} = useSelector((State: RootState) => State.app);

  useEffect(() => {
    let storeversion =
      Platform.OS === 'ios'
        ? appdetails.response.ios_version
        : appdetails.response.android_version;
    if (storeversion !== null && VersionInfo.appVersion !== storeversion) {
      setShowUpdateBox(true);
    } else {
      setShowUpdateBox(false);
    }
  }, [appdetails]);

  return (
    <View>
      <Card>
        <FlatList
          data={personal}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={[style.seperator, theme.secondary]} />
                <Pressable
                  style={style.item}
                  onPress={() => {
                    gotoScreen(item.route);
                  }}
                  testID={`personalitems${index}`}>
                  <Text style={[theme.onSurface, style.itemText]}>
                    {item.name}
                  </Text>
                  <View style={style.rightbox}>
                    <Text
                      style={[
                        style.itemText,
                        item.readonly ? style.disabledText : theme.onSurface,
                      ]}>
                      {item.name === 'Name' && details?.display_name}
                      {item.name === 'Email' && details?.email?.address}
                      {(item.name === 'My Goal' && user_goal) || ''}
                    </Text>
                    {item.route === 'appearence' && <ThemeToggle />}
                    {item.route !== 'appearence' &&
                      item.route !== 'applock' && (
                        <RightArrow fillColor={item.readonly && 'grey'} />
                      )}
                  </View>
                </Pressable>
              </>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View>
                <View style={style.personalHeader}>
                  <Text style={[style.cardHeader, theme.onSurface]}>
                    Personal
                  </Text>
                  <Text style={[style.appversion, theme.onSurface]}>
                    {Platform.OS === 'ios' ? 'iOS ' : 'Android '}
                    App Version {VersionInfo.appVersion}
                  </Text>
                </View>
                {showUpdateBox && (
                  <View style={style.updateBox}>
                    <Text style={[style.newversion, theme.onSurface]}>
                      New Version Available
                    </Text>
                    <Button
                      label="Update Now"
                      triggerclick={() => {
                        Linking.openURL(
                          Platform.OS === 'ios'
                            ? 'https://apps.apple.com/us/app/credzy/id1661529824'
                            : 'https://play.google.com/store/apps/details?id=com.credzy',
                        );
                      }}
                      type="primary"
                    />
                  </View>
                )}
              </View>
            );
          }}
          scrollEnabled={false}
        />
        <View style={[style.seperator, theme.secondary]} />
      </Card>
    </View>
  );
};

export default Personal;
