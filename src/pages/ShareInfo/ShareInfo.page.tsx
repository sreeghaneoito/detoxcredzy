/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import CardGroup from '../Dashboard/components/cards/CardGroup';
import {CredzyLogo_light, CredzyLogo_dark} from '../../assets';
import {style} from './ShareInfo.style';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import {useFocusEffect} from '@react-navigation/native';
import {withSphere} from '../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../hooks/useBubbleAnimation';
import {useUtils} from '../../hooks/useUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import {CredzyUnavailable} from '../../components';
import {routeEnum} from '../../enums/route.enum';

const ShareScreen = () => {
  const viewRef = useRef();
  const {changeBubblePosition} = useBubbleAnimation();
  const {theme, currentTheme, gotoScreen} = useUtils();
  const today = new Date();
  const {dashboardData, swa} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const months = [
    'january',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const onShare = async () => {
    viewRef.current
      .capture()
      .then((uri: any) => {
        Share.open({
          url: uri,
          message: 'Credit Info - Credzy',
        })
          .then(() => {
            console.log('Success');
            gotoScreen(routeEnum.DASHBOARDTAB);
          })
          .catch(err => {
            console.log(err);
            gotoScreen(routeEnum.DASHBOARDTAB);
          });
      })
      .catch();
  };
  useEffect(() => {
    setTimeout(() => {
      onShare();
    }, 100);
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        changeBubblePosition(1);
      }, 0);
      return () => changeBubblePosition(0);
    }, []),
  );
  return (
    <ViewShot ref={viewRef}>
      <View style={[style.container, theme.surface]}>
        <SafeAreaView>
          <View style={style.logoBox}>
            {currentTheme === 'dark' ? (
              <CredzyLogo_dark />
            ) : (
              <CredzyLogo_light />
            )}
          </View>
          {dashboardData.questionnaire ? (
            <CardGroup notExpandable dashboardData={dashboardData} swa={swa} />
          ) : (
            <CredzyUnavailable />
          )}
          <View>
            <Text style={[style.date, theme.onSurface]}>
              {months[today.getMonth()]} {today.getDate()},{' '}
              {today.getFullYear()}
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </ViewShot>
  );
};
const ShareInfo = withSphere({BodyContainer: ShareScreen});
export default ShareInfo;
