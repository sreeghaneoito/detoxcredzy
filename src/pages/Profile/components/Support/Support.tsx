import {View, Text, FlatList, Pressable, Linking} from 'react-native';
import React from 'react';
import Card from '../../../../components/Card/Card.component';
import {style} from '../style';
import {support} from '../routes';
import RightArrow from '../../../../assets/icons/RightArrow';
import {useUtils} from '../../../../hooks/useUtils';

const Support = () => {
  const {theme, gotoScreen} = useUtils();
  return (
    <View>
      <Card>
        <FlatList
          data={support}
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
                  testID={`supportitem${index + 1}`}>
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
                <Text style={[style.cardHeader, theme.onSurface]}>Support</Text>
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

export default Support;
