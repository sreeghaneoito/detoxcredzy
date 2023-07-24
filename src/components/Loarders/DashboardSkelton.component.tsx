import {View, Platform} from 'react-native';
import React from 'react';
import {style} from './style';
const DashboardSkelton = () => {
  return (
    <>
      <View style={style.container}>
        <View
          style={[
            style.card,
            Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
          ]}
        />
        <View
          style={[
            style.card,
            Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
          ]}
        />
        <View
          style={[
            style.card,
            Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
          ]}
        />
      </View>
    </>
  );
};

export default DashboardSkelton;
