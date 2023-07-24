import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {routeEnum} from '../../enums/route.enum';
import {onboardStep} from '../../enums/store.enum';
import {navigate} from '../../routes/navigations';
import {scoreWatcher} from '../../services/api/scorewatcher';
import {FETCHDATA, UPDATEDATA} from '../actions/scorewatcher.action';
import {formslice} from '../slices/forms.slice';
import {scoreWatcherSlice} from '../slices/scorewatcher.slice';

function* getDashboardData() {
  const Response: AxiosResponse = yield scoreWatcher.fetchparams();
  yield put(
    scoreWatcherSlice.actions.updateDashboardStatusCode(
      Response.status || Response.response.status,
    ),
  );
  if (Response.status === 200) {
    yield put(scoreWatcherSlice.actions.DashboardData(Response.data));

    // Fetch SWA Report
    const SwaReport: AxiosResponse = yield scoreWatcher.fetchswareport({
      type: 'score',
    });
    if (SwaReport.status === 200) {
      yield put(scoreWatcherSlice.actions.swaReport(SwaReport.data));
    } else {
      yield put(scoreWatcherSlice.actions.swaReport({}));
    }
    // Fetch SWA Params
    const SwaResponse: AxiosResponse = yield scoreWatcher.fetchswa();
    if (SwaResponse.status === 200) {
      yield put(scoreWatcherSlice.actions.swaData(SwaResponse.data));
    } else {
      yield put(scoreWatcherSlice.actions.swaData({}));
    }
    yield put(scoreWatcherSlice.actions.credzyUnavailable(false));
  } else {
    yield put(scoreWatcherSlice.actions.DashboardData({}));
    yield put(scoreWatcherSlice.actions.credzyUnavailable(true));
  }
}

function* updateThreeC(action: any) {
  const Response: AxiosResponse = yield scoreWatcher.updateparams(
    action.payload,
  );
  if (Response.status === 200) {
    yield put(scoreWatcherSlice.actions.DashboardData(Response.data));
    // * Navigate based on page route
    if (action.payload.from === 'onboard-forms') {
      yield put(
        formslice.actions.setFormControl({
          data: {onboardpagestatus: onboardStep.COMPLETE},
        }),
      );
      action.payload.func();
    } else if (action.payload.from === 'update-goal') {
      navigate(routeEnum.PROFILEPAGE);
      // * Navigate based on score type
    } else if (
      action.payload.type === 'capital' ||
      action.payload.type === 'capacity'
    ) {
      navigate(routeEnum.DASHBOARDTAB);
    }
  } else {
    yield put(scoreWatcherSlice.actions.DashboardData({}));
  }
}

export function* scoreWatcherSaga() {
  yield takeEvery(FETCHDATA, getDashboardData);
  yield takeEvery(UPDATEDATA, updateThreeC);
}
