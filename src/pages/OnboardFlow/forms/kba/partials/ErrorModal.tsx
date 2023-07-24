import {Text} from 'react-native';
import React from 'react';

import {AnimatedModal, Button} from '../../../../../components';
import {style} from './ErrorModal.style';
import {Error_Modal} from '../../../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store/root.reducer';
import {kbaSlice} from '../../../../../redux/slices/kba.slice';

const ErrorModal = () => {
  // state from hookes
  const dispatch = useDispatch();

  // state from store
  const {statusCode} = useSelector(
    (state: RootState) => state.kba.submitAnswers,
  );

  /**
   * Close the current modal and fetch the questions again
   */
  const closeModal = () => {
    dispatch(kbaSlice.actions.changeStatusCode(0));
    dispatch(kbaSlice.actions.fetchSwaQuestions({}));
  };

  return (
    <AnimatedModal visible={statusCode === 417}>
      <Error_Modal />
      <Text style={style.head}>Oops!</Text>
      <Text style={style.desc}>
        We couldn’t find your credit profile with that information. Let’s try
        re-entering your information in case there was a typo.
      </Text>
      <Button
        label="re enter info"
        type="primary"
        Customstyle={style.customBtn}
        triggerclick={closeModal}
      />
    </AnimatedModal>
  );
};

export default ErrorModal;
