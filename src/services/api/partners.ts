import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {request} from '../request/request';

async function fetchPartners() {
  try {
    return await request.get(`${Appconfig.BASE_URL}/customer/partners`);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

export const partners = {fetchPartners};
