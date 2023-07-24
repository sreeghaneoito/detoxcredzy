import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CapacityData from './Forms/CapacityData';
import CapitalData from './Forms/CapitalData';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import {dashboard} from '../../enums/store.enum';
import {style} from './DashboardForms.style';
import CharacterData from './Forms/CharacterData';

const DashBoardPage = () => {
  const dashboardState = useSelector(
    (State: RootState) => State.dashboard.status,
  );
  return (
    <SafeAreaView>
      <View style={style.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View testID="dashboardform-screen">
            {dashboardState === dashboard.CAPACITY && <CapacityData />}
            {dashboardState === dashboard.CAPITAL && <CapitalData />}
            {dashboardState === dashboard.CHARECTER && <CharacterData />}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardPage;
