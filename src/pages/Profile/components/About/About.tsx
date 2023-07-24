import React from 'react';
import {style} from '../style';
import {about} from '../routes';
import {useUtils} from '../../../../hooks/useUtils';
import RightArrow from '../../../../assets/icons/RightArrow';
import {View, Text, FlatList, Pressable, Linking} from 'react-native';
import Card from '../../../../components/Card/Card.component';

const About = () => {
  const {theme, gotoScreen} = useUtils();
  return (
    <View>
      <Card>
        <FlatList
          data={about}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={[style.seperator, theme.secondary]} />
                <Pressable
                  style={style.item}
                  onPress={() => {
                    item.type === 'page' && gotoScreen(item.route);
                    item.type === 'link' && Linking.openURL(item.route);
                  }}
                  testID={`aboutitems${index + 1}`}>
                  <Text style={[theme.onSurface, style.itemText]}>
                    {item.name}
                  </Text>
                  <RightArrow />
                </Pressable>
              </>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <>
                <Text style={[style.cardHeader, theme.onSurface]}>About</Text>
              </>
            );
          }}
          scrollEnabled={false}
        />
        <View style={[style.seperator, theme.secondary]} />
      </Card>
    </View>
  );
};

export default About;
