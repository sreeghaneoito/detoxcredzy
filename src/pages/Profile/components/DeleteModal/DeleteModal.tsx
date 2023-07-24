import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {style} from './DeleteModal.style';
import {AnimatedModal, Button, OutlineButton} from '../../../../components';
import {useUtils} from '../../../../hooks/useUtils';
import Tick from '../../../../assets/icons/Tick';
import {registerSlice} from '../../../../redux/slices/registration.slice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';

interface Props {
  isVisible: boolean;
  close: () => void;
}

/**
 * Delete modal
 * @param isVisible: a boolean value that indicates the modal is visible or not
 * @param close: function that close the modal
 * @returns JSX component
 */
const DeleteModal = ({isVisible, close}: Props) => {
  const {theme, dispatch} = useUtils();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const {loading} = useSelector(
    (State: RootState) => State.register.deleteUser,
  );

  const deleteAccount = () => {
    dispatch(registerSlice.actions.deleteUser());
  };
  return (
    <AnimatedModal visible={isVisible} testid="delete-modal">
      <Text style={[style.heading, theme.onSurface]}>Delete Account</Text>
      <Text style={[style.desc, theme.onSurface]}>
        <Text style={style.highlighted}>You will lose access</Text> to your
        <Text style={style.highlighted}> Credit Report</Text> and your{' '}
        <Text style={style.highlighted}>Character</Text>,
        <Text style={style.highlighted}> Capacity</Text> , and{' '}
        <Text style={style.highlighted}>Capital Scores</Text>
      </Text>
      <Pressable
        testID="confirm-check"
        style={[style.checKArea, theme.surface]}
        onPress={() => {
          setConfirmDelete(!confirmDelete);
        }}>
        <View style={style.checkBox}>{confirmDelete && <Tick />}</View>
        <Text style={[style.confirmationText, theme.onSurface]}>
          Yes, I want to delete my Credzy account
        </Text>
      </Pressable>
      <View style={style.btnGroup}>
        <OutlineButton
          label="cancel"
          triggerclick={close}
          Customstyle={style.customBtn}
          testid="cancel"
        />
        <Button
          testid="confirm"
          label="delete"
          triggerclick={deleteAccount}
          type="danger"
          Customstyle={style.customBtn}
          disabled={!confirmDelete}
          loading={loading}
        />
      </View>
    </AnimatedModal>
  );
};

export default DeleteModal;
