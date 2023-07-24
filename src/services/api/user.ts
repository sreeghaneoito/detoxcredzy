import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {request} from '../request/request';

async function fetchUser() {
  try {
    return await request.get(`${Appconfig.BASE_URL}/customer/profile`);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

async function refreshUserToken() {
  try {
    return await request.get(`${Appconfig.BASE_URL}/customer/profile`);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

export const user = {fetchUser, refreshUserToken};
