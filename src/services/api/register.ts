import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {
  RegisterUser,
  RegisterPassword,
} from '../../interfaces/services.interface';
import {request} from '../request/request';

async function registerUser(Args: RegisterUser) {
  const {email, firstname, lastname} = Args;
  try {
    return await request.post(`${Appconfig.BASE_URL}/customer/register`, {
      first_name: firstname,
      last_name: lastname,
      email: email.toLowerCase(),
    });
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}
async function registerPassword(Args: RegisterPassword) {
  try {
    return await request.patch(`${Appconfig.BASE_URL}/customer/register`, {
      password: Args,
    });
  } catch (error) {
    showMessage({
      message: 'Something went wrong. Try again Later',
      type: 'danger',
    });
    return error;
  }
}
async function updateUser(Args: RegisterPassword) {
  try {
    return await request.patch(`${Appconfig.BASE_URL}/customer/profile`, Args);
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}
async function deleteUser() {
  try {
    return await request.delete(`${Appconfig.BASE_URL}/customer/profile`);
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * @module linktopop
 * @description Link customer to POPcx
 * @method patch
 * @param ssn Customer SS Number
 * @param dob Customer Date of Birth
 */
async function linktopop(Args: any) {
  try {
    return await request.patch(
      `${Appconfig.BASE_URL}/customer/service/credzy/link-to-pop`,
      Args,
    );
  } catch (error) {
    showMessage({
      message: error.response.data.message,
      type: 'danger',
    });
    return error;
  }
}
export const register = {
  registerUser,
  registerPassword,
  updateUser,
  deleteUser,
  linktopop,
};
