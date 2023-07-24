import {View, Text, SafeAreaView, Image, Linking, Platform} from 'react-native';
import React from 'react';
import {style} from './Partner.style';
import {AppStatusBar, HeaderWithBack, Spacer} from '../../components';
import {useUtils} from '../../hooks/useUtils';
import Call from '../../assets/icons/Call';
import Chat from '../../assets/icons/Chat';
import Email from '../../assets/icons/Email';
import {useTheme} from '../../hooks/useTheme';
import {useRoute} from '@react-navigation/native';
import {formatPhone} from '../../utils/functions/formatPhone';
import ContactCard from './partials/Contactcard';

interface RouteIn {
  cs_call_number: string;
  cs_avatar: string;
  cs_display_name: string;
  cs_slogan: string;
  cs_work_hours: string;
  cs_text_number: string;
  cs_email_address: string;
}
/**
 * Partner Profile page
 * The contact section below is just a demo. will be changed once the functionality implimented 🗑️
 * @returns JSX Element
 */
const PartnerView = () => {
  const {gotobackScreen, makecall, composeMail, composeMessage} = useUtils();
  const route = useRoute();
  const data: RouteIn = route.params;
  const {theme, color} = useTheme();
  return (
    <SafeAreaView>
      <View style={style.container}>
        <AppStatusBar />
        <HeaderWithBack triggerClick={gotobackScreen} />
        <View style={style.profilecard}>
          <Image source={{uri: data.cs_avatar}} style={style.PageImg} />
          <Text style={[style.profileName, theme.onSurface]}>
            {data.cs_display_name}
          </Text>
          <Text style={[style.profileDesc, theme.onSurface]}>
            {data.cs_slogan || ''}
          </Text>
          <Text style={style.profileTime}>
            availability: {data.cs_work_hours || ''}
          </Text>
        </View>
        <View style={[style.contactCard, theme.cardBorder]}>
          <ContactCard
            icon={<Call />}
            label="Call"
            value={formatPhone(data.cs_call_number) || '--'}
            onPress={() => {
              data.cs_call_number !== null &&
                makecall(`tel:${formatPhone(data.cs_call_number)}`);
            }}
          />
          <Spacer space={1} bg={color.lightGrey} />
          <ContactCard
            icon={<Chat />}
            label="Text"
            value={formatPhone(data.cs_text_number) || '--'}
            onPress={() => {
              if (Platform.OS === 'android') {
                Linking.openURL(`sms:${formatPhone(data.cs_text_number)}`).then(
                  res => {
                    console.log(res);
                  },
                );
              }
            }}
          />
          <Spacer space={1} bg={color.lightGrey} />
          <ContactCard
            icon={<Email />}
            label="Email"
            value={data.cs_email_address || '--'}
            onPress={() => {
              data.cs_email_address !== null &&
                composeMail(data.cs_email_address);
              composeMail(data.cs_email_address);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PartnerView;
