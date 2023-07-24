import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {app} from '../../interfaces/slice.interface';

const InitialState: app = {
  appdetails: {
    response: {
      android_version: null,
      ios_version: null,
    },
    loading: false,
  },
};

type AppSliceReducer<payload> = CaseReducer<app, PayloadAction<payload>>;

const fetchAppDetails: AppSliceReducer<null> = state => {
  state.appdetails.loading = true;
};

const appDetailsResponse: AppSliceReducer<{
  ios_version: string | null;
  android_version: string | null;
}> = (state, action) => {
  state.appdetails.response = action.payload;
  state.appdetails.loading = false;
};

const appSlice = createSlice({
  name: 'app',
  initialState: InitialState,
  reducers: {
    fetchAppDetails,
    appDetailsResponse,
  },
});

export {appSlice};
