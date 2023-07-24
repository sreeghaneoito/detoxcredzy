import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authentication} from '../../interfaces/slice.interface';
const InitialState: authentication = {
  login: {
    response: {},
    loading: false,
  },
  logout: {
    response: {},
    loading: false,
  },
  updatePassword: {
    loading: false,
    payload: {
      email: '',
      password: '',
    },
    response: {},
    type: 'email',
    success: false,
  },
  updateEmail: {
    loading: false,
    payload: {
      password: '',
      email: {
        address: '',
      },
    },
    response: {},
  },
  updateEmailToken: {
    loading: false,
    response: {},
  },
};
type AuthenticationSliceReducer<payload> = CaseReducer<
  authentication,
  PayloadAction<payload>
>;

//* Authentication
const login: AuthenticationSliceReducer<authentication> = state => {
  state.login.loading = true;
};

const loginresponse: AuthenticationSliceReducer<authentication> = (
  state,
  action,
) => {
  state.login.response = action.payload;
  state.login.loading = false;
};
const logout: AuthenticationSliceReducer<authentication> = state => {
  state.logout.loading = true;
};

const logoutresponse: AuthenticationSliceReducer<authentication> = (
  state,
  action,
) => {
  state.logout.response = action.payload;
  state.logout.loading = false;
};

//* Password updates
const updatepasswordwithtoken: AuthenticationSliceReducer<
  authentication
> = state => {
  state.updatePassword.loading = true;
};
const updatepasswordwithemail: AuthenticationSliceReducer<
  authentication
> = state => {
  state.updatePassword.loading = true;
};
const updateuserpassword: AuthenticationSliceReducer<{
  password: string;
  new_password: string;
}> = state => {
  state.updatePassword.loading = true;
};
const updatepasswordResponse: AuthenticationSliceReducer<
  authentication
> = state => {
  state.updatePassword.loading = false;
};
const updatepasswordResult: AuthenticationSliceReducer<boolean> = (
  state,
  action,
) => {
  state.updatePassword.success = action.payload;
};

//* Email updates

const updateEmail: AuthenticationSliceReducer<null> = state => {
  state.updateEmail.loading = true;
};
const updateEmailResponse: AuthenticationSliceReducer<{}> = (state, action) => {
  state.updateEmail.response = action.payload;
  state.updateEmail.loading = false;
};

const updateEmailToken: AuthenticationSliceReducer<null> = state => {
  state.updateEmailToken.loading = true;
};
const updateEmailTokenResponse: AuthenticationSliceReducer<{}> = (
  state,
  action,
) => {
  state.updateEmailToken.response = action.payload;
  state.updateEmailToken.loading = false;
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: InitialState,
  reducers: {
    login,
    loginresponse,
    logout,
    logoutresponse,
    updatepasswordwithtoken,
    updatepasswordResponse,
    updatepasswordwithemail,
    updatepasswordResult,
    updateuserpassword,
    updateEmail,
    updateEmailResponse,
    updateEmailToken,
    updateEmailTokenResponse,
  },
});
export {authenticationSlice};
