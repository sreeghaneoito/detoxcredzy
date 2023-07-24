import {Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {style} from './Maintenance.style';

const Maintenance = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image
        source={{
          uri: 'https://i.ibb.co/prxGbLQ/undraw-Maintenance-re-59vn-1.png',
        }}
        style={style.image}
      />
      <Text style={style.head}>We're under maintenance</Text>
      <Text style={style.desc}>
        Please check back soon just putting little touch up on some pretty
        updates
      </Text>
    </SafeAreaView>
  );
};

export default Maintenance;
