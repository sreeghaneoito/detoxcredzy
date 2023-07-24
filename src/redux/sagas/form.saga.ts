import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {form} from '../../services/api/form';
import {FETCHFORMCONTROL, SETFORMCONTROL} from '../actions/form.action';
import {formslice} from '../slices/forms.slice';

function* fetchformControl() {
  const Response: AxiosResponse = yield form.getFormControl();
  if (Response.status === 200) {
    yield put(formslice.actions.formControlResponse(Response.data));
  }
}

function* setformControl(Action: any) {
  const Response: AxiosResponse = yield form.updateFormControl(Action.payload);
  if (Response.status === 200) {
    yield put(formslice.actions.formControlResponse(Response.data));
  }
}

export function* formSaga() {
  yield takeEvery(FETCHFORMCONTROL, fetchformControl);
  yield takeEvery(SETFORMCONTROL, setformControl);
}
