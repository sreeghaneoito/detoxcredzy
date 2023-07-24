import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  Image,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../../hooks/useTheme';
import {style} from './Partner.style';
import {useUtils} from '../../hooks/useUtils';
import {routeEnum} from '../../enums/route.enum';
import {AppStatusBar} from '../../components';
import {withSphere} from '../../hoc/withBGAnimation';
import {useBubbleAnimation} from '../../hooks/useBubbleAnimation';
import {partnerSlice} from '../../redux/slices/partners.slice';
import {RootState} from '../../redux/store/root.reducer';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const PartnerHome = () => {
  const {theme} = useTheme();
  const {gotoScreen} = useUtils();
  const {changeBubblePosition} = useBubbleAnimation();
  const dispatch = useDispatch();
  const {data, loading} = useSelector(
    (State: RootState) => State.partner.partners,
  );
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Change bubble position
   */
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        changeBubblePosition(6);
      }, 50);
      return () => changeBubblePosition(0);
    }, []),
  );

  /**
   * Fetch partners list
   */
  useEffect(() => {
    dispatch(partnerSlice.actions.fetchPartners(null));
  }, []);

  /**
   * Functionlity for pull down refresh
   */
  const onPullDownRefresh = () => {
    setRefreshing(true);
    dispatch(partnerSlice.actions.fetchPartners(null));
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  /**
   * Partners list
   */
  const RenderItem = ({item, index}) => {
    return (
      <>
        {!loading ? (
          <TouchableOpacity
            style={[
              style.card,
              theme.surfaceExtend,
              Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
            ]}
            onPress={() => {
              gotoScreen(routeEnum.PARTNERLISTPAGE, {data: item});
            }}>
            <Image
              source={{
                uri: item.logo || 'https://i.ibb.co/fS02zgF/pngwing-com.png',
              }}
              style={style.Cardimage}
            />
            <View style={style.cardBox}>
              <Text style={[style.CardHead, theme.onSurface]}>
                {item.contact_name}
              </Text>
              <Text style={style.CardDesc} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <ActivityIndicator />
        )}
      </>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <AppStatusBar />

        <FlatList
          data={data.filter(
            obj =>
              obj?.departments?.length !== 0 ||
              obj?.profile?.profile_specialists?.length !== 0,
          )}
          ListFooterComponent={() => {
            return <View style={{height: 100}} />;
          }}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onPullDownRefresh}
            />
          }
          ListHeaderComponent={() => {
            return (
              <View>
                <Text style={[theme.onSurface, style.head]}>Partners</Text>
                <Text style={[style.desc, theme.onSurface]}>
                  If you have questions, These experts have the answers.{' '}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const PartnerHomePage = withSphere({BodyContainer: PartnerHome});
export default PartnerHomePage;
