import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {app} from '../../services/api/app';
import {APPDETAILS} from '../actions/app.action';
import {appSlice} from '../slices/app.slice';

/**
 * Fetch app details
 * step 1 : API call to get app details
 *        if response status code is 200, then
 * step 2 : Store the app details in the appDetailsResponse
 *        else
 * step 3 : An empty object will be stored in appDetailsResponse
 */
function* appDetails() {
  const Response: AxiosResponse = yield app.appdetails();
  if (Response.status === 200) {
    yield put(appSlice.actions.appDetailsResponse(Response.data));
  } else {
    yield put(appSlice.actions.appDetailsResponse({}));
  }
}

export function* appSaga() {
  yield takeEvery(APPDETAILS, appDetails);
}
