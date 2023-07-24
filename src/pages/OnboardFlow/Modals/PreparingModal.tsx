import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AnimatedModal, Button} from '../../../components';
import AnimatedLottieView from 'lottie-react-native';
import {style} from './style';
import {Success_Modal, Preparing_light} from '../../../assets';
import {useTheme} from '../../../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {routeEnum} from '../../../enums/route.enum';

const PreparingModal = () => {
  const [PrepareDone, setPrepareDone] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 8000);
  }, []);
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <AnimatedModal
        visible={PrepareDone}
        onDismiss={() => {}}
        testid="preparingdashboard">
        {showLoader ? (
          <AnimatedLottieView
            source={Preparing_light}
            style={style.animationBox}
            autoPlay
          />
        ) : (
          <View>
            <Success_Modal />
            <Text style={[style.heading, theme.onSurface]}>You're All set</Text>
            <Button
              label="Done"
              triggerclick={() => {
                setPrepareDone(false);
                navigation.navigate(routeEnum.DASHBOARDTAB);
              }}
              type="primary"
              testid="gotodashboard"
            />
          </View>
        )}
      </AnimatedModal>
    </>
  );
};

export default React.memo(PreparingModal);
