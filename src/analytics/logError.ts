import analytics from '@react-native-firebase/analytics';
import {store} from '../redux/store/store';

interface logErr {
  statuscode: number;
  message: string;
  dob: string;
  ssn: string;
}
async function logError({statuscode, message, dob, ssn}: logErr) {
  const {email, firstname, lastname} = store.getState().register.userDetails;
  try {
    await analytics().logEvent('errors', {
      statuscode: statuscode,
      message: message,
      dob: dob,
      ssn: ssn,
      email: email,
      name: `${firstname} ${lastname}`,
    });
    console.log('analytics working');
  } catch (error) {
    console.log(error);
  }
}

export const Firebaseanalytics = {logError};
