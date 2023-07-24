import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {user} from '../../interfaces/slice.interface';

const InitialState: user = {
  usertoken: '',
  userdetails: {},
  loading: false,
  loggedin: false,
  showWelcomeNote: true,
  needBioMetric: false,
  refreshtoken: '',
};
type UserSliceReducer<payload> = CaseReducer<user, PayloadAction<payload>>;

const changeUserToken: UserSliceReducer<user> = (state, action) => {
  state.usertoken = action.payload.usertoken;
  state.refreshtoken = action.payload.refreshtoken;
};

const fetchUser: UserSliceReducer<user> = state => {
  state.loading = true;
};

const fetchUserResponse: UserSliceReducer<user> = (state, action) => {
  state.userdetails = action.payload;
  state.loading = false;
};

const changeLoggedinStatus: UserSliceReducer<user> = (state, action) => {
  state.loggedin = action.payload.loggedin;
};

const flushState: UserSliceReducer<null> = state => {
  state = InitialState;
  return state;
};

const changeWelcomeNoteStatus: UserSliceReducer<boolean> = (state, action) => {
  state.showWelcomeNote = action.payload;
};

const changeApplockStatus: UserSliceReducer<boolean> = (state, action) => {
  state.needBioMetric = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: InitialState,
  reducers: {
    changeUserToken,
    fetchUser,
    fetchUserResponse,
    changeLoggedinStatus,
    flushState,
    changeWelcomeNoteStatus,
    changeApplockStatus,
  },
});
export {userSlice};
