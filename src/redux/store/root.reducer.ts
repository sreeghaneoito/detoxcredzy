import {combineReducers} from 'redux';
import {bubbleanimationSlice} from '../slices/bubbleanimation.slice';
import {dashboardSlice} from '../slices/dashboard.slice';
import {onboardFlowSlice} from '../slices/onboardFlow.slice';
import {themeSlice} from '../slices/theme.slice';
import {toastSlice} from '../slices/toast.slice';
import {registerSlice} from '../slices/registration.slice';
import {authenticationSlice} from '../slices/authentication.slice';
import {userSlice} from '../slices/user.slice';
import {formslice} from '../slices/forms.slice';
import {utilsSlice} from '../slices/utils.slice';
import {scoreWatcherSlice} from '../slices/scorewatcher.slice';
import {appSlice} from '../slices/app.slice';
import {kbaSlice} from '../slices/kba.slice';
import {partnerSlice} from '../slices/partners.slice';

export const rootReducer = combineReducers({
  register: registerSlice.reducer,
  theme: themeSlice.reducer,
  toast: toastSlice.reducer,
  bubbleanimation: bubbleanimationSlice.reducer,
  dashboard: dashboardSlice.reducer,
  onboardflow: onboardFlowSlice.reducer,
  authentication: authenticationSlice.reducer,
  user: userSlice.reducer,
  form: formslice.reducer,
  utils: utilsSlice.reducer,
  scoreWatcher: scoreWatcherSlice.reducer,
  app: appSlice.reducer,
  kba: kbaSlice.reducer,
  partner: partnerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
