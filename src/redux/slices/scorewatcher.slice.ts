import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {scoreWatcher} from '../../interfaces/slice.interface';

const initialState: scoreWatcher = {
  dashboardData: {
    capacity: null,
    capital: null,
    questionnaire: null,
    timestamp: null,
    user_goal: null,
  },
  loading: false,
  swa: {
    clientKey: '',
    last_report_product: '',
    userId: '',
  },
  swareport: {
    score: '',
    total_balances: '',
    monthly_payments: '',
  },
  credzyunavailable: false,
  dashboardDataStatusCode: 0,
};

type scoreWatcherSliceReducer<payload> = CaseReducer<
  scoreWatcher,
  PayloadAction<payload>
>;

const fetchDashboardData: scoreWatcherSliceReducer<any> = state => {
  if (state.dashboardDataStatusCode !== 200) {
    state.loading = true;
  }
};
const updateThreecData: scoreWatcherSliceReducer<scoreWatcher> = state => {
  state.loading = true;
};
const DashboardData: scoreWatcherSliceReducer<any> = (state, action) => {
  state.loading = false;
  state.dashboardData = action.payload;
};
const fetchswa: scoreWatcherSliceReducer<any> = state => {
  state.loading = true;
};
const swaData: scoreWatcherSliceReducer<any> = (state, action) => {
  state.loading = false;
  state.swa = action.payload;
};

const fetchswareport: scoreWatcherSliceReducer<any> = state => {
  state.loading = true;
};
const swaReport: scoreWatcherSliceReducer<any> = (state, action) => {
  state.loading = false;
  state.swareport = action.payload;
};
const credzyUnavailable: scoreWatcherSliceReducer<boolean> = (
  state,
  action,
) => {
  state.credzyunavailable = action.payload;
};

const flushState: scoreWatcherSliceReducer<null> = state => {
  state = initialState;
  return state;
};

const changeLoaderState: scoreWatcherSliceReducer<boolean> = (
  state,
  action,
) => {
  state.loading = action.payload;
};

const updateDashboardStatusCode: scoreWatcherSliceReducer<number> = (
  state,
  action,
) => {
  state.dashboardDataStatusCode = action.payload;
};
const scoreWatcherSlice = createSlice({
  name: 'scoreWatcher',
  initialState,
  reducers: {
    fetchDashboardData,
    DashboardData,
    updateThreecData,
    fetchswa,
    swaData,
    fetchswareport,
    swaReport,
    credzyUnavailable,
    flushState,
    changeLoaderState,
    updateDashboardStatusCode,
  },
});
export {scoreWatcherSlice};
