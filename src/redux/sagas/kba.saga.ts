import {AxiosResponse} from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {routeEnum} from '../../enums/route.enum';
import {navigate} from '../../routes/navigations';
import {kba} from '../../services/api/kba';
import {
  CREATESWA,
  FETCHSWAQUESTION,
  SAVESWAQUESTIONS,
} from '../actions/kba.action';
import {kbaSlice} from '../slices/kba.slice';

/**
 * Create SWA
 * step 1 : API Call
 *        if Response status code is 201
 * step 2 : Store the response in CreateSwaResponse
 * step 3 : Fetch SWA Question
 *        else
 * step 4 : store an empty object in CreateSwaResponse
 */
function* createSwa(action: any) {
  // step 1
  const response: AxiosResponse = yield kba.createSwaAccount(action.payload);
  if (response.status === 201) {
    // step 2
    yield put(kbaSlice.actions.createSwaResponse(response.data));
    // step 3
    yield put(kbaSlice.actions.fetchSwaQuestions({}));
  } else {
    // step 4
    yield put(kbaSlice.actions.createSwaResponse({}));
  }
}

/**
 * Fetch SWA Questions
 * step 1 : API Call
 *        if Response status code is 200
 * step 2 : Store the Response in fetchSWAQuestionsResponse, Its the list of questions for users
 * step 3 : navigate to KBA Question
 */
function* fetchSwaQuestions() {
  // step 1
  const response: AxiosResponse = yield kba.fetchSwaQuestions();
  if (response.status === 200) {
    // step 2
    yield put(kbaSlice.actions.fetchSwaQuestionsResponse(response.data));
    // step 3
    navigate(routeEnum.KBAQUESTIONS);
  }
}

/**
 *
 * Save SWA Answers
 * step 1 : API Call
 *         if Response status code is 200
 * step 2 : Store the Response in saveSwaAnswersResponse
 * step 3 : Navigate to Onboard Flow
 * else
 * step 4 : Store an empty object in saveSwaAnswersResponse
 * step 5 : Sore the Response status code in changeStatusCode slice
 */
function* saveSwaAnswers(action: any) {
  // step 1
  const response: AxiosResponse = yield kba.saveSwaAnswers(action.payload);
  if (response.status === 200) {
    // step 2
    yield put(kbaSlice.actions.saveSwaAnswersResponse(response.data));
    // step 3
    navigate(routeEnum.SIGNUPONBOARDFLOW);
  } else {
    // step 4
    yield put(kbaSlice.actions.saveSwaAnswersResponse({}));
    // step 5
    yield put(kbaSlice.actions.changeStatusCode(response.status));
  }
}

export function* kbaSaga() {
  yield takeEvery(CREATESWA, createSwa);
  yield takeEvery(FETCHSWAQUESTION, fetchSwaQuestions);
  yield takeEvery(SAVESWAQUESTIONS, saveSwaAnswers);
}
