import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {customer} from '../../enums/endpoints';
import {Login} from '../../interfaces/services.interface';
import {request} from '../request/request';

/**
 * User login api call
 * @argument email User email
 * @argument password user password
 * @returns the Response object or Error object
 */
async function login(Args: Login) {
  const {email, password} = Args;
  try {
    return await request.post(`${Appconfig.BASE_URL}${customer.login}`, {
      email: email.toLowerCase(),
      password: password,
    });
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * User logout api call
 * @returns  the Response object or Error object
 */
async function logout() {
  try {
    return await request.delete(`${Appconfig.BASE_URL}${customer.logout}`);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * Change password with email. Mostly used for forgot password
 * @argument email user email
 * @returns the Response object or Error object
 */
async function changepasswordwithemail(Args: any) {
  try {
    return await request.post(`${Appconfig.BASE_URL}${customer.password}`, {
      email: Args,
    });
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * Change password with user token
 * @argument password user password
 * @returns the Response object or Error object
 */
async function changepasswordwithtoken(Args: any) {
  try {
    return await request.patch(`${Appconfig.BASE_URL}${customer.password}`, {
      password: Args,
    });
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * Change password with old password
 * @argument password user old password
 * @argument new_password user new password
 * @returns the Response object or Error object
 */
async function userupdatepassword(Args: {
  password: string;
  new_password: string;
}) {
  try {
    return await request.post(
      `${Appconfig.BASE_URL}${customer.updatepassword}`,
      {
        password: Args.password,
        new_password: Args.new_password,
      },
    );
  } catch (error) {
    return error.response;
  }
}

async function updateemail(Args: any) {
  try {
    return await request.post(
      `${Appconfig.BASE_URL}/customer/profile/email`,
      Args,
    );
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error.response;
  }
}

/**
 * @module updateEmailToken
 * @description Returns customer login email confirmation.
 * @method patch
 * @returns
 */
async function updateemailToken() {
  try {
    return await request.patch(`${Appconfig.BASE_URL}/customer/profile/email`);
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error.response;
  }
}
export const auth = {
  login,
  logout,
  changepasswordwithemail,
  changepasswordwithtoken,
  userupdatepassword,
  updateemail,
  updateemailToken,
};
