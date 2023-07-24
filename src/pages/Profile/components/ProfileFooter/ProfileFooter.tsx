import {View} from 'react-native';
import React from 'react';
import {useUtils} from '../../../../hooks/useUtils';
import {style} from './ProfileFooter.style';
import {OutlineButton} from '../../../../components';
import {modalType} from '../../Profile.page';

interface Props {
  openModal: (e: modalType) => void;
}
/**
 * Profile Foooter
 * @param openmodal: function that open the modal
 * @returns JSX component
 */
const ProfileFooter = ({openModal}: Props) => {
  const {theme} = useUtils();
  return (
    <>
      <View style={style.logoutContainer}>
        <OutlineButton
          Customstyle={style.customBtn}
          label="Log out"
          type="primary"
          testid="logout"
          triggerclick={() => {
            openModal('logout');
          }}
        />
      </View>
      {/* <View style={style.deleteAccountContainer}>
        <Text
          style={[style.deleteText, theme.onSurface]}
          testID="delete"
          onPress={() => {
            openModal('delete');
          }}>
          Delete Account
        </Text>
      </View> */}
    </>
  );
};

export default ProfileFooter;
