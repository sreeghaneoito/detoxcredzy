import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dashboard} from '../../enums/store.enum';

type initial = {
  status: string;
};
type dashboardSliceReducer<payload> = CaseReducer<
  initial,
  PayloadAction<payload>
>;
const initialState: initial = {
  status: dashboard.DASHBOARD,
};
const switchDashboardScreen: dashboardSliceReducer<initial> = (
  state,
  action,
) => {
  state = action.payload;
  return state;
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    switchDashboardScreen,
  },
});
export {dashboardSlice};
