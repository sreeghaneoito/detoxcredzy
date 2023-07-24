import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {request} from '../request/request';

async function updateFormControl(Args: any) {
  try {
    return await request.patch(`${Appconfig.BASE_URL}/customer/control`, Args);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

async function getFormControl() {
  try {
    return await request.get(`${Appconfig.BASE_URL}/customer/control`);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}
export const form = {updateFormControl, getFormControl};
