import {all} from 'redux-saga/effects';
import {appSaga} from '../sagas/app.saga';
import {authenticationSaga} from '../sagas/authentication.saga';
import {formSaga} from '../sagas/form.saga';
import {kbaSaga} from '../sagas/kba.saga';
import {partnerSaga} from '../sagas/partners.saga';
import {registerSaga} from '../sagas/register.saga';
import {scoreWatcherSaga} from '../sagas/scorewatcher.saga';
import {themeSaga} from '../sagas/theme.saga';
import {userSaga} from '../sagas/user.saga';

function* rootSaga() {
  yield all([
    registerSaga(),
    authenticationSaga(),
    userSaga(),
    scoreWatcherSaga(),
    appSaga(),
    formSaga(),
    kbaSaga(),
    partnerSaga(),
  ]);
  yield all([themeSaga()]);
}

export {rootSaga};
