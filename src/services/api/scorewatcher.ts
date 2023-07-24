import {showMessage} from 'react-native-flash-message';
import {Appconfig} from '../../config/config';
import {request} from '../request/request';

interface updateProp {
  type: string;
  data: {};
}

/**
 * @module fetchswa
 * @description Retrieves params object from legacy of the profiles service data source. Currently this ScoreWatcherArray and the schema represents as such but will eventually be updated to include others.
 * @method get
 * @returns
 */
async function fetchswa() {
  try {
    return await request.get(
      `${Appconfig.BASE_URL}/customer/service/credzy/data-source-params`,
    );
  } catch (error) {
    return error;
  }
}

/**
 * @module fetchswareport
 * @description Retrieves a report using a linked profile and a type.
 * @method get
 * @param type Report type. possible values are score, capacity, capital, charecter, capital
 * @returns
 */
async function fetchswareport(Args: any) {
  try {
    return await request.get(
      `${Appconfig.BASE_URL}/customer/service/credzy/reports/${Args.type}`,
    );
  } catch (error) {
    return error;
  }
}

/**
 * @module updateparams
 * @description Updates the Credzy params object from legacy Credzy service through the external_fk.
 * @method patch
 * @param Args got to interface to view Args
 * @returns
 */
async function updateparams(Args: updateProp) {
  try {
    return await request.patch(
      `${Appconfig.BASE_URL}/customer/service/credzy/params/${Args.type}`,
      Args.data,
    );
  } catch (error) {
    showMessage({
      message: error?.response?.data?.message,
      type: 'danger',
    });
    return error;
  }
}

/**
 * @module fetchparams
 * @description Retrieves the Credzy params object from legacy Credzy service through the external_fk.
 * @method get
 */
async function fetchparams() {
  try {
    return await request.get(
      `${Appconfig.BASE_URL}/customer/service/credzy/params`,
    );
  } catch (error) {
    return error;
  }
}

export const scoreWatcher = {
  updateparams,
  fetchswa,
  fetchswareport,
  fetchparams,
};
