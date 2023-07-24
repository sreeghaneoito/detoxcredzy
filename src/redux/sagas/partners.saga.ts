import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {partners} from '../../services/api/partners';
import {PARTNERS} from '../actions/partners.action';
import {partnerSlice} from '../slices/partners.slice';

function* fetchPartners() {
  const Response: AxiosResponse = yield partners.fetchPartners();
  if (Response.status === 200) {
    yield put(partnerSlice.actions.changePartnersStatusCode(Response.status));
    yield put(partnerSlice.actions.fetchPartnersResponse(Response.data));
    yield put(partnerSlice.actions.changePartnersStatusCode(Response.status));
  } else {
    yield put(partnerSlice.actions.fetchPartnersResponse({}));
  }
}

export function* partnerSaga() {
  yield takeEvery(PARTNERS, fetchPartners);
}
