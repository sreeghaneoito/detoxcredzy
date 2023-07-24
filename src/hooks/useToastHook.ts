import {Text, View} from 'react-native';
import {BaseToast, BaseToastProps} from 'react-native-toast-message';
import {useSelector, useDispatch} from 'react-redux';
import {toastSlice} from '../redux/slices/toast.slice';
import {RootState} from '../redux/store/root.reducer';

/**
 * In this project we using a custom toast. Its controlled by the store and disappear after 3 sec
 * @returns
 */
export const useToastHook = () => {
  const dispatch = useDispatch();
  /**
   * The toast data fetched from store
   */
  const toastdata = useSelector((state: RootState) => state.toast);

  /**
   * Common utility function to show the toast
   * @param message The message that should be showed on the toast
   */
  const showToast = (message: string) => {
    dispatch(toastSlice.actions.toastStatus({status: true, message: message}));
    setTimeout(() => {
      dispatch(toastSlice.actions.toastStatus({status: false, message: ''}));
    }, 5000);
  };

  // const toastConfig = {
  //   common: ({text1, props}) => (
  //     <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
  //       <Text>{text1}</Text>
  //       <Text>{props.uuid}</Text>
  //     </View>
  //   ),
  // };

  return {toastdata, showToast};
};
