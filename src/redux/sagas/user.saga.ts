import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {routeEnum} from '../../enums/route.enum';
import {navigate} from '../../routes/navigations';
import {user} from '../../services/api/user';
import {FETCHUSER} from '../actions/user.action';
import {userSlice} from '../slices/user.slice';

function* fetchUser() {
  const Response: AxiosResponse = yield user.fetchUser();
  if (Response.status === 200) {
    yield put(userSlice.actions.fetchUserResponse(Response.data.data));
  } else {
    navigate(routeEnum.ONBOARD);
    yield put(userSlice.actions.changeLoggedinStatus(''));
  }
}

export function* userSaga() {
  yield takeEvery(FETCHUSER, fetchUser);
}
