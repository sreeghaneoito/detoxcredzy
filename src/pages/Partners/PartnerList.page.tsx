import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HeaderWithBack, AppStatusBar} from '../../components';
import {useUtils} from '../../hooks/useUtils';
import {style} from './Partner.style';
import {useTheme} from '../../hooks/useTheme';
import {routeEnum} from '../../enums/route.enum';
import {useRoute} from '@react-navigation/native';
import {partnerIndividuals, profiles} from '../../interfaces/slice.interface';

/**
 * patners List page
 * @returns JSX Element
 */
const PartnerList = () => {
  const {gotobackScreen, gotoScreen} = useUtils();
  const {theme} = useTheme();

  const route = useRoute();
  const data = route.params?.data;
  const showPartnerDetail = (payload: partnerIndividuals) => {
    gotoScreen(routeEnum.PARTNERPROFILE, payload);
  };
  const profileSpecialist = (): profiles => {
    let arr: [] = [];
    if (data?.is_primary === 1) {
      arr.push(...data?.profile?.profile_specialists);
    } else {
      data?.profiles?.map(obj => {
        arr.push(...obj.profile_specialists);
      });
    }
    return arr;
  };

  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <AppStatusBar />
          <HeaderWithBack triggerClick={gotobackScreen} />
          <FlatList
            data={[1]}
            ListFooterComponent={() => {
              return <View style={{height: 100}} />;
            }}
            ListHeaderComponent={() => {
              return (
                <>
                  <View style={style.profilecard}>
                    <Image
                      source={{
                        uri:
                          data.logo ||
                          'https://i.ibb.co/fS02zgF/pngwing-com.png',
                      }}
                      style={style.PageImg}
                    />
                    <Text style={[style.profileName, theme.onSurface]}>
                      {data.contact_name}
                    </Text>
                    <Text
                      style={[style.profileDesc, theme.onSurface]}
                      numberOfLines={3}>
                      {data.description}
                    </Text>
                  </View>
                </>
              );
            }}
            renderItem={() => (
              <>
                <FlatList
                  scrollEnabled={false}
                  data={data.departments}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        testID={`department${index + 1}`}
                        style={[
                          style.card,
                          theme.surfaceExtend,
                          Platform.OS === 'ios'
                            ? style.shadowIOS
                            : style.shadowAndroid,
                        ]}
                        onPress={() => {
                          showPartnerDetail(item);
                        }}>
                        <Image
                          source={{
                            uri: item.cs_avatar,
                          }}
                          style={style.Cardimage}
                        />
                        <View style={style.cardBox}>
                          <Text style={[style.CardHead, theme.onSurface]}>
                            {item.cs_display_name || '--'}
                          </Text>
                          <Text style={style.CardDesc}>
                            {item.cs_nickname || '--'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  ListHeaderComponent={() => {
                    return (
                      <>
                        <Text style={style.sectionHead}>Service Desk</Text>
                      </>
                    );
                  }}
                  ListFooterComponent={() => {
                    return data.departments.length === 0 ? (
                      <Text style={style.notAvaiable}>
                        No Partners available
                      </Text>
                    ) : (
                      <View />
                    );
                  }}
                />

                <FlatList
                  scrollEnabled={false}
                  data={profileSpecialist()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        testID={`experts${index + 1}`}
                        style={[
                          style.card,
                          theme.surfaceExtend,
                          Platform.OS === 'ios'
                            ? style.shadowIOS
                            : style.shadowAndroid,
                        ]}
                        onPress={() => {
                          showPartnerDetail(item);
                        }}>
                        <Image
                          source={{
                            uri: item.cs_avatar,
                          }}
                          style={style.Cardimage}
                        />
                        <View style={style.cardBox}>
                          <Text style={[style.CardHead, theme.onSurface]}>
                            {item.cs_display_name || '--'}
                          </Text>
                          <Text style={style.CardDesc}>
                            {item.cs_nickname || '--'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  ListHeaderComponent={() => {
                    return (
                      <>
                        {profileSpecialist().length !== 0 ? (
                          <Text style={style.sectionHead}>Experts</Text>
                        ) : (
                          <View />
                        )}
                      </>
                    );
                  }}
                />
              </>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PartnerList;
