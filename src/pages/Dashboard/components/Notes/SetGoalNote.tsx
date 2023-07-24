import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import Animated from 'react-native-reanimated';
import {useUtils} from '../../../../hooks/useUtils';
import {routeEnum} from '../../../../enums/route.enum';

const SetGoalNote = () => {
  const {theme, gotoScreen} = useUtils();
  return (
    <Animated.View style={style.container}>
      <View style={[style.card, theme.greenbg]}>
        <Text style={style.heading}>Real Quick,</Text>
        <Text style={[style.content, theme.onSurface]}>
          Before You Get Too Far Along. Let’s Make Sure You Set Your Goals.{' '}
          <Text
            style={style.link}
            onPress={() => {
              gotoScreen(routeEnum.MYGOAL);
            }}>
            Set Goal Now
          </Text>
        </Text>
      </View>
    </Animated.View>
  );
};

export default SetGoalNote;
