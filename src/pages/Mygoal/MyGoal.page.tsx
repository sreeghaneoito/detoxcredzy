import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useSelector} from 'react-redux';
import {Success_Modal} from '../../assets';
import {
  BottomOptions,
  AnimatedModal,
  RadioGroup,
  Button,
} from '../../components';
import {routeEnum} from '../../enums/route.enum';
import {useUtils} from '../../hooks/useUtils';
import {scoreWatcherSlice} from '../../redux/slices/scorewatcher.slice';
import {RootState} from '../../redux/store/root.reducer';
import {style} from './MyGoal.style';

const MyGoal = () => {
  const {dashboardData, loading} = useSelector(
    (State: RootState) => State.scoreWatcher,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(dashboardData.user_goal);
  const {theme, gotoScreen, gotobackScreen, dispatch} = useUtils();
  const updateData = () => {
    const payloaddata = {
      type: 'user-goal',
      data: {
        goal: selectedValue,
      },
      from: 'update-goal',
    };
    dispatch(scoreWatcherSlice.actions.updateThreecData(payloaddata));
  };
  const data = [
    {
      name: 'Mortgage',
      isSelected: selectedValue?.toLowerCase() === 'mortgage',
    },
    {
      name: 'Car Loan',
      isSelected: selectedValue?.toLowerCase() === 'car loan',
    },
    {
      name: 'Solar Loan',
      isSelected: selectedValue?.toLowerCase() === 'solar loan',
    },
    {
      name: 'Good Credit profile',
      isSelected: selectedValue?.toLowerCase() === 'good credit profile',
    },
    {
      name: 'Other',
      isSelected: selectedValue?.toLowerCase() === 'other',
    },
  ];
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <View style={style.radioBox}>
            <RadioGroup
              testid="mygoal"
              Radiodata={data}
              withbg
              setSelectedValue={setSelectedValue}>
              <Text style={[style.radioHeader, theme.onSurface]}>
                What is your current goal?
              </Text>
            </RadioGroup>
          </View>
          <BottomOptions
            ghostAction={gotobackScreen}
            buttonAction={updateData}
            ghostlabel="back"
            mainlabel="Continue"
            loading={loading}
          />
        </View>
      </SafeAreaView>
      <AnimatedModal
        visible={modalVisible}
        onDismiss={() => {
          setModalVisible(false);
        }}>
        <Success_Modal />
        <Text style={[theme.onBackground, style.modalHeading]}>Great !</Text>
        <Text style={[theme.onBackground, style.modalDesc]}>
          Now we can give you better insights that fit your personal goal.
        </Text>
        <Button
          label="ok"
          triggerclick={() => {
            setModalVisible(false);
            gotoScreen(routeEnum.PROFILEPAGE);
          }}
          type="primary"
          Customstyle={style.btnCustom}
        />
      </AnimatedModal>
    </>
  );
};

export default MyGoal;
