import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {request} from '../request/request';

async function createSwaAccount(Args: any) {
  try {
    return await request.post(
      `${Appconfig.BASE_URL}/customer/service/credzy/create-swa-user`,
      Args,
    );
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

async function fetchSwaQuestions() {
  try {
    return await request.get(
      `${Appconfig.BASE_URL}/customer/service/credzy/fetch-swa-kba-questions`,
    );
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

async function saveSwaAnswers(Args: any) {
  try {
    return await request.post(
      `${Appconfig.BASE_URL}/customer/service/credzy/save-swa-kba-questions`,
      Args,
    );
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

export const kba = {createSwaAccount, fetchSwaQuestions, saveSwaAnswers};
