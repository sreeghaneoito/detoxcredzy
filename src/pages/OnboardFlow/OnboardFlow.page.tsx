import React from 'react';
import {useSelector} from 'react-redux';
import {Progress} from '../../components';
import {style} from './OnboardFlow.style';
import NewC from './WelcomeSection/NewC.page';
import {SafeAreaView, View} from 'react-native';
import Ccomplete from './OnboardComplete/Ccomplete';
import {RootState} from '../../redux/store/root.reducer';
import CapitalForm from './forms/capitalForm/CapitalForm';
import CapacityForm from './forms/capacityForm/CapacityForm';
import {onboardFlow, onboardStep} from '../../enums/store.enum';
import CharecterForm from './forms/charecterForm/CharecterForm';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';

const SignupOnboard = () => {
  const {onboardpagestatus, formProgress, onboardState} = useSelector(
    (State: RootState) => State.form.data,
  );
  console.log(formProgress);
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <Progress max={4} value={formProgress || 0} />
        </View>
        {onboardpagestatus === onboardStep.WELCOME && (
          <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
            <NewC />
          </Animated.View>
        )}
        {onboardpagestatus === onboardStep.FORM && (
          <Animated.View
            entering={SlideInRight}
            exiting={SlideOutRight}
            testID="forms">
            {onboardState === onboardFlow.CHARECTER && <CharecterForm />}
            {onboardState === onboardFlow.CAPACITY && <CapacityForm />}
            {onboardState === onboardFlow.CAPITAL && <CapitalForm />}
          </Animated.View>
        )}
        {onboardpagestatus === onboardStep.COMPLETE && (
          <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
            <Ccomplete />
          </Animated.View>
        )}
      </SafeAreaView>
    </>
  );
};

export default SignupOnboard;
