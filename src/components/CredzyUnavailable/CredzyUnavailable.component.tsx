import {View, Text, Pressable, Platform} from 'react-native';
import React, {useState} from 'react';
import {style} from './CredzyUnavailable.style';
import {BlockChart, AnimatedModal, Button} from '..';
import {useUtils} from '../../hooks/useUtils';
import {Error_Modal} from '../../assets';

/**
 * Credzy Unavailable
 * @returns JSX Component
 */
const CredzyUnavailable = () => {
  const {theme, font, makecall} = useUtils();
  const [isModalVisible, setIsModalVisible] = useState(false);
  try {
    return (
      <>
        <View style={style.container}>
          {['Capacity', 'Character', 'Capital'].map((obj, index) => {
            return (
              <Pressable
                key={index}
                style={[
                  style.card,
                  theme.surfaceExtend,
                  Platform.OS === 'ios' ? style.shadowIOS : style.shadowAndroid,
                ]}
                onPress={() => {
                  setIsModalVisible(true);
                }}
                testID={obj}>
                <Text style={[font.gotham, style.head, theme.onSurface]}>
                  {obj}
                </Text>
                <Text style={style.errorText}>N/A</Text>
                <View style={style.chartContainer}>
                  <BlockChart max={0} val={0} />
                </View>
              </Pressable>
            );
          })}
        </View>
        <AnimatedModal
          visible={isModalVisible}
          onDismiss={() => {
            setIsModalVisible(false);
          }}>
          <Error_Modal />
          <Text style={[style.oops, theme.onSurface]}>Oops !</Text>
          <Text style={[style.errdesc, theme.onSurface]}>
            The service Credzy is unavailable. Please contact your specialist to
            turn it on.
          </Text>
          <Button
            type="ghost"
            label="close"
            triggerclick={() => {
              setIsModalVisible(false);
            }}
            Customstyle={style.custombtn}
            testid="close"
          />
          <Text
            style={style.calltext}
            onPress={() => {
              makecall('tel:+1(800)-215-5212');
            }}>
            CALL NOW 1(800)555-5555
          </Text>
        </AnimatedModal>
      </>
    );
  } catch (error) {
    console.log('Credzy unavailable =>', error);
    return <View style={style.container} />;
  }
};

export default CredzyUnavailable;
