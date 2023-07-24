import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {register} from '../../services/api/register';
import {
  DELETEUSER,
  LINKTOPOP,
  REGISTEREMAIL,
  REGISTERPASSWORD,
  UPDATEUSER,
} from '../actions/register.actions';
import {registerSlice} from '../slices/registration.slice';
import {userSlice} from '../slices/user.slice';
import {navigate, navigationref} from '../../routes/navigations';
import {routeEnum} from '../../enums/route.enum';
import {formslice} from '../slices/forms.slice';
import {forms, onboardFlow, onboardStep} from '../../enums/store.enum';
import {scoreWatcher} from '../../services/api/scorewatcher';
import {scoreWatcherSlice} from '../slices/scorewatcher.slice';
import {CommonActions} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {Firebaseanalytics} from '../../analytics/logError';

const initalFormControl = {
  form: forms.PHONE,
  formpage: routeEnum.SIGNUPDETAILS,
  formProgress: 1,
  onboardState: onboardFlow.CHARECTER,
  onboardpagestatus: onboardStep.WELCOME,
};

function* registerEmail(Action: any) {
  const response: AxiosResponse = yield register.registerUser(Action.payload);
  if (response.status === 201) {
    yield put(registerSlice.actions.registerEmailSuccess(response.data));
    navigate(routeEnum.VERIFYEMAIL, {email: Action.payload.email});
  } else {
    yield put(registerSlice.actions.registerEmailSuccess({}));
    yield put(userSlice.actions.flushState({}));
  }
}

function* registerPassword(Action: any) {
  const response: AxiosResponse = yield register.registerPassword(
    Action.payload,
  );
  if (response.status === 200) {
    yield put(registerSlice.actions.registerPasswordSuccess(response.data));
    yield put(
      userSlice.actions.changeUserToken({
        usertoken: response?.data?.token || '',
        refreshtoken: response?.data?.refresh_token,
      }),
    );
    yield put(formslice.actions.setFormControl({data: initalFormControl}));
    navigate(routeEnum.SIGNUPDETAILS);
  } else {
    yield put(registerSlice.actions.registerPasswordSuccess({}));
  }
}

function* updateUser(Action: any) {
  const response: AxiosResponse = yield register.updateUser(
    Action.payload.data,
  );
  if (response.status === 200) {
    yield put(userSlice.actions.fetchUserResponse(response.data.data));
    yield Action.payload.from === 'update-phone' &&
      put(
        formslice.actions.setFormControl({
          data: {form: forms.SSN, formProgress: 2},
        }),
      );
    if (Action.payload.from === 'update-ssn') {
      const checkSSN: AxiosResponse = yield scoreWatcher.fetchparams();
      if (checkSSN.status === 200) {
        // const checkSWA: AxiosResponse = yield scoreWatcher.fetchswa();
        // if (checkSWA.status === 200 && checkSWA.data.clientKey === undefined) {
        //   navigate(routeEnum.KBA);
        //   return;
        // } else {
        put(
          formslice.actions.setFormControl({
            data: {form: forms.PHONE, formProgress: 1},
          }),
        );
        navigate(routeEnum.ONBOARDWELCOME, {RequireBackButton: false});

        //   return;
        // }
      }
      if (checkSSN?.response?.status === 404) {
        yield put(registerSlice.actions.updateUserDetailsResponse({}));
        navigate(routeEnum.VALIDATIONERROR, {
          code: 404,
        });
        return;
      }
    }
    yield put(registerSlice.actions.updateUserDetailsResponse(response.data));
  } else {
    yield put(registerSlice.actions.updateUserDetailsResponse({}));
    if (Action.payload.from === 'update-ssn') {
      if (response?.response?.status === 422) {
        navigate(routeEnum.VALIDATIONERROR, {
          code: 422,
        });
        return;
      }
    }
  }
}

function* deleteUser() {
  const Response: AxiosResponse = yield register.deleteUser();
  if (Response.status === 200) {
    yield put(userSlice.actions.flushState({}));
    yield put(scoreWatcherSlice.actions.flushState({}));
    yield put(formslice.actions.flushState({}));
    yield put(registerSlice.actions.deleteUserResponse(Response.data));
    navigate(routeEnum.ONBOARD);
    navigationref.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: routeEnum.ONBOARD}],
      }),
    );
    showMessage({
      message: 'Your Credzy account was deleted ',
      type: 'danger',
    });
  } else {
    yield put(registerSlice.actions.deleteUserResponse({}));
  }
}

function* linkToPop(Action: any) {
  const Response: AxiosResponse = yield register.linktopop(Action.payload);
  yield put(registerSlice.actions.linkToPopResponse(Response.data));
  if (Response.status === 200) {
    put(
      formslice.actions.setFormControl({
        data: {form: forms.PHONE, formProgress: 1},
      }),
    );
    navigate(routeEnum.ONBOARDWELCOME, {RequireBackButton: false});
    yield put(userSlice.actions.fetchUser({}));
  }
  if (Response?.response?.status === 404) {
    yield Firebaseanalytics.logError({
      ssn: Action?.payload?.ssn,
      dob: Action?.payload?.dob,
      message: 'No Matching Profile',
      statuscode: Response?.response?.status,
    });
    yield put(registerSlice.actions.updateUserDetailsResponse({}));
    navigate(routeEnum.VALIDATIONERROR, {
      code: 404,
    });
    return;
  }
  if (Response?.response?.status === 409) {
    yield Firebaseanalytics.logError({
      ssn: Action?.payload?.ssn,
      dob: Action?.payload?.dob,
      message: 'SSN Already used',
      statuscode: Response?.response?.status,
    });
    yield put(registerSlice.actions.updateUserDetailsResponse({}));
    navigate(routeEnum.VALIDATIONERROR, {
      code: 409,
    });
    return;
  }
  yield put(registerSlice.actions.linkToPopResponse(Response.data));
}

export function* registerSaga() {
  yield takeEvery(REGISTEREMAIL, registerEmail);
  yield takeEvery(REGISTERPASSWORD, registerPassword);
  yield takeEvery(UPDATEUSER, updateUser);
  yield takeEvery(DELETEUSER, deleteUser);
  yield takeEvery(LINKTOPOP, linkToPop);
}
