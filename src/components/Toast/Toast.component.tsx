import {Text, View} from 'react-native';
import React from 'react';
import {style} from './Toast.style';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import {useToastHook} from '../../hooks/useToastHook';

const AppToast = () => {
  const {toastdata} = useToastHook();
  try {
    return (
      <View>
        {toastdata.status && (
          <Animated.View
            style={style.toast}
            entering={SlideInDown.duration(500)}
            exiting={SlideOutDown.duration(500)}
            testID="toast">
            <Text style={style.content}>{toastdata.message}</Text>
          </Animated.View>
        )}
      </View>
    );
  } catch (error) {
    console.log('Toast =>', error);
    return <View style={style.toast} />;
  }
};

export default AppToast;
