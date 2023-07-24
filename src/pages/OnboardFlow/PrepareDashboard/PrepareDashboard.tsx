/* eslint-disable react-hooks/exhaustive-deps */
import {View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import PreparingModal from '../Modals/PreparingModal';
import {useUtils} from '../../../hooks/useUtils';
import {userSlice} from '../../../redux/slices/user.slice';
import {formslice} from '../../../redux/slices/forms.slice';
import {onboardFlow} from '../../../enums/store.enum';

const PrepareDashboard = () => {
  const {dispatch} = useUtils();
  useEffect(() => {
    dispatch(userSlice.actions.changeLoggedinStatus({loggedin: true}));
    dispatch(
      formslice.actions.setFormControl({
        data: {onboardState: onboardFlow.COMPLETED},
      }),
    );
  }, []);

  return (
    <SafeAreaView testID="preparingdashboard-screen">
      <View>
        <PreparingModal />
      </View>
    </SafeAreaView>
  );
};

export default PrepareDashboard;
