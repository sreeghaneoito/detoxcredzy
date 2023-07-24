import {View} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import {style} from './AnimatedModal.style';
import Animated, {BounceInUp} from 'react-native-reanimated';
import {useTheme} from '../../hooks/useTheme';
interface Props {
  visible: boolean /* is the modal visible or not */;
  onDismiss?: () => void /* Function trigger on outside click */;
  children: any /* Content shows inside the modal */;
  testid?: string /* testid for automation */;
}
const AnimatedModal = ({visible, children, onDismiss, testid}: Props) => {
  const {theme} = useTheme();
  try {
    return (
      <>
        {visible && (
          <Portal>
            <Modal
              visible={visible}
              style={style.modal}
              onDismiss={onDismiss}
              testID={`${testid}modal`}
              dismissable={onDismiss ? true : false}>
              <Animated.View entering={BounceInUp}>
                <View style={[style.card, theme.surfaceExtend]}>
                  {children}
                </View>
              </Animated.View>
            </Modal>
          </Portal>
        )}
      </>
    );
  } catch (error) {
    console.log('Animated Modal =>', error);
    return <View style={style.modal} />;
  }
};

export default AnimatedModal;
