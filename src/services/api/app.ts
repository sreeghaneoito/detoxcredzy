import {Appconfig} from '../../config/config';
import {customer} from '../../enums/endpoints';
import {request} from '../request/request';

async function appdetails() {
  try {
    return await request.get(`${Appconfig.BASE_URL}${customer.appdetails}`);
  } catch (error) {
    return error;
  }
}

export const app = {appdetails};
