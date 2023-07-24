import {Text} from 'react-native';
import React from 'react';
import {AnimatedModal, Button} from '../../../../components';
import {Success_Modal} from '../../../../assets';
import {style} from './DetailsModal.style';
import {dashboard} from '../../../../enums/store.enum';
import {useUtils} from '../../../../hooks/useUtils';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/root.reducer';
interface Props {
  visible: boolean;
  closeModal: () => void;
}
const DetailsModal = ({visible, closeModal}: Props) => {
  const dashboardState = useSelector(
    (State: RootState) => State.dashboard.status,
  );
  const {theme} = useUtils();
  const calculationdata = [
    {
      state: dashboard.CAPACITY,
      calculation: '100 - ( debt / income * 100)',
      describtion:
        'Lenders use this score to determine if you can handle more debt. This score represents your monthly remaining income after debt.',
    },
    {
      state: dashboard.CHARECTER,
      calculation: 'Average Bureau Credit Score',
      describtion:
        'This score is determined by The Credit Bureaus based on a person’s history with credit.',
    },
    {
      state: dashboard.CAPITAL,
      calculation: 'Savings + Asset1 + Asset2...',
      describtion:
        'This number can help reduce your downpayment. This number represents your networth without income.',
    },
  ];
  return (
    <AnimatedModal
      visible={visible}
      onDismiss={closeModal}
      testid="calculations">
      <Success_Modal />
      <Text style={[style.heading, theme.onSurface]}>Calculations</Text>

      {calculationdata
        .filter(item => item.state === dashboardState)
        .map((item, index) => (
          <>
            <Text key={index} style={style.calc}>
              {item.calculation}
            </Text>
            <Text style={[style.desc, theme.onSurface]}>
              {item.describtion}
            </Text>
          </>
        ))}
      <Button
        label="ok"
        type="primary"
        triggerclick={closeModal}
        Customstyle={style.customBtn}
        testid="ok"
      />
    </AnimatedModal>
  );
};

export default DetailsModal;
