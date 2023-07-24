import {CommonActions} from '@react-navigation/native';
import {AxiosResponse} from 'axios';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';
import {put, takeEvery} from 'redux-saga/effects';
import {routeEnum} from '../../enums/route.enum';
import {navigate, navigationref} from '../../routes/navigations';
import {auth} from '../../services/api/auth';
import {
  LOGIN,
  LOGOUT,
  UPDATEPASSWORDWITHEMAIL,
  UPDATEPASSWORDWITHTOKEN,
  UPDATEUSEREMAIL,
  UPDATEUSEREMAILTOKEN,
  UPDATEUSERPASSWORD,
} from '../actions/authentication.action';
import {authenticationSlice} from '../slices/authentication.slice';
import {formslice} from '../slices/forms.slice';
import {scoreWatcherSlice} from '../slices/scorewatcher.slice';
import {userSlice} from '../slices/user.slice';

function* login(Action: any) {
  const response: AxiosResponse = yield auth.login(Action.payload);
  if (response.status === 201) {
    yield put(authenticationSlice.actions.loginresponse(response.data));
    yield put(
      userSlice.actions.changeUserToken({
        usertoken: response?.data?.token || '',
        refreshtoken: response?.data.refresh_token || '',
      }),
    );
    yield put(userSlice.actions.changeLoggedinStatus({loggedin: true}));
    yield put(formslice.actions.fetchFormControl({}));
    yield put(scoreWatcherSlice.actions.fetchDashboardData({}));
    yield put(userSlice.actions.fetchUser({}));
    navigate(routeEnum.DASHBOARDTAB);
  } else {
    yield put(authenticationSlice.actions.loginresponse({}));
  }
}

function* logout() {
  const response: AxiosResponse = yield auth.logout();
  if (response.status === 200) {
    yield put(userSlice.actions.flushState({}));
    yield put(scoreWatcherSlice.actions.flushState({}));
    yield put(formslice.actions.flushState({}));
    yield put(authenticationSlice.actions.logoutresponse(response.data));
    navigate(routeEnum.ONBOARD);
    navigationref.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: routeEnum.ONBOARD}],
      }),
    );
  } else {
    yield put(authenticationSlice.actions.logoutresponse({}));
  }
}

function* updatepasswordwithtoken(Action: any) {
  const response: AxiosResponse = yield auth.changepasswordwithtoken(
    Action.payload,
  );
  if (response.status === 200) {
    yield put(
      userSlice.actions.changeUserToken({
        usertoken: response?.data?.token || '',
      }),
    );
    yield put(
      authenticationSlice.actions.updatepasswordResponse(response.data),
    );
    navigate(routeEnum.LOGINPAGE);
  } else {
    yield put(authenticationSlice.actions.updatepasswordResponse({}));
  }
}
function* updatepasswordwithemail(Action: any) {
  const response: AxiosResponse = yield auth.changepasswordwithemail(
    Action.payload,
  );
  if (response.status === 200) {
    yield put(
      authenticationSlice.actions.updatepasswordResponse(response.data),
    );
    yield put(authenticationSlice.actions.updatepasswordResult(true));
  } else {
    yield put(authenticationSlice.actions.updatepasswordResponse({}));
  }
}
function* updateuserpassword(Action: any) {
  const response: AxiosResponse = yield auth.userupdatepassword(Action.payload);
  if (response.status === 201) {
    yield put(authenticationSlice.actions.updatepasswordResult(true));
    navigate(routeEnum.PROFILEPAGE);
    Alert.alert('password updated successfully');
  } else if (response.status === 422) {
    yield Alert.alert(response.data.message);
  } else {
    yield put(authenticationSlice.actions.updatepasswordResponse({}));
  }
  yield put(authenticationSlice.actions.updatepasswordResponse(response.data));
}

function* updateUserEmail(Action: any) {
  const response: AxiosResponse = yield auth.updateemail(Action.payload);
  if (response.status === 201) {
    yield put(authenticationSlice.actions.updateEmailResponse(response.data));
    navigate(routeEnum.VERIFYEMAIL, {email: Action.payload.email.address});
  } else {
    yield put(authenticationSlice.actions.updateEmailResponse({}));
  }
}

function* updateUserEmailToken() {
  const response: AxiosResponse = yield auth.updateemailToken();
  if (response.status === 200) {
    yield put(
      authenticationSlice.actions.updateEmailTokenResponse(response.data),
    );
    yield put(
      userSlice.actions.changeUserToken({usertoken: response.data.token}),
    );
    navigate(routeEnum.DASHBOARDTAB);
    Toast.show({
      type: 'success',
      text1: 'Email changed successfully',
      text2: 'Please login again',
    });
  } else {
    yield put(authenticationSlice.actions.updateEmailTokenResponse({}));
  }
}
export function* authenticationSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(UPDATEPASSWORDWITHTOKEN, updatepasswordwithtoken);
  yield takeEvery(UPDATEPASSWORDWITHEMAIL, updatepasswordwithemail);
  yield takeEvery(UPDATEUSERPASSWORD, updateuserpassword);
  yield takeEvery(UPDATEUSEREMAIL, updateUserEmail);
  yield takeEvery(UPDATEUSEREMAILTOKEN, updateUserEmailToken);
}
