import {View, Text} from 'react-native';
import React from 'react';
import {AnimatedModal, OutlineButton, Button} from '../../../../components';
import {style} from './LogoutModal.style';

import {useUtils} from '../../../../hooks/useUtils';
import {authenticationSlice} from '../../../../redux/slices/authentication.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';

interface Props {
  isVisible: boolean;
  close: () => void;
}

/**
 * Logout Modal
 * @param isVisible: Boolean that indicates is the modal is visible or not
 * @param close: function that close the modal
 * @returns JSX Component
 */
const LogoutModal = ({isVisible, close}: Props) => {
  const {theme, dispatch} = useUtils();
  const logout = () => {
    dispatch(authenticationSlice.actions.logout({}));
  };
  const {loading} = useSelector(
    (State: RootState) => State.authentication.logout,
  );
  return (
    <AnimatedModal visible={isVisible}>
      <Text style={[style.logoutText, theme.onSurface]}>Logout </Text>
      <Text style={[style.logoutDesc, theme.onSurface]}>
        Are you sure you want to log out?
      </Text>
      <View style={style.btncontainer}>
        <OutlineButton
          label="cancel"
          triggerclick={close}
          Customstyle={style.btncustom}
          testid="cancel"
        />
        <Button
          label="logout"
          type="primary"
          triggerclick={logout}
          Customstyle={style.btncustom}
          loading={loading}
          testid="logout"
        />
      </View>
    </AnimatedModal>
  );
};

export default LogoutModal;
