import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';
import {useUtils} from '../../../../hooks/useUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
import {userSlice} from '../../../../redux/slices/user.slice';

const WelcomeNote = () => {
  const {theme, dispatch} = useUtils();
  const {status} = useSelector((State: RootState) => State.dashboard);
  return (
    <View style={style.container} testID="welcomeNote">
      <View style={[style.card, theme.greenbg]}>
        <Text style={style.heading}>Welcome,</Text>
        <Text style={[style.content, theme.onSurface]}>
          This Is The {status} Dashboard. Here You Will Find All The Things That
          Go Into Building Your {status}.{' '}
          <Text
            style={style.link}
            onPress={() => {
              dispatch(userSlice.actions.changeWelcomeNoteStatus(false));
            }}
            testID="dismiss">
            Dismiss
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default WelcomeNote;
