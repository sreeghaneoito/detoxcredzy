import {useDispatch, useSelector} from 'react-redux';
import {onboardFlow, onboardStep} from '../enums/store.enum';
import {formslice} from '../redux/slices/forms.slice';
import {RootState} from '../redux/store/root.reducer';

export const useForms = () => {
  const dispatch = useDispatch();
  const {form, formProgress, formpage, onboardState, onboardpagestatus} =
    useSelector((State: RootState) => State.form.data);
  /**
   * change the onboard section status
   * @param state the state will be character, capacity or capital
   */
  const changeOnboardState = (state: onboardFlow) => {
    dispatch(formslice.actions.setFormControl({data: {onboardState: state}}));
  };

  /**
   * change the onboard pages
   * @param state the state will be form, complete or welcome
   */
  const changeonBoardPageStatus = (state: onboardStep) => {
    dispatch(
      formslice.actions.setFormControl({data: {onboardpagestatus: state}}),
    );
  };

  /**
   * change the progressbar status
   * @param value value will be a number that current progress bar value
   */
  const updateProgress = (value: number) => {
    dispatch(formslice.actions.setFormControl({data: {formProgress: value}}));
  };

  return {
    // State
    form,
    formProgress,
    formpage,
    onboardState,
    onboardpagestatus,
    // update functions
    changeOnboardState,
    changeonBoardPageStatus,
    updateProgress,
  };
};
