import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {registration} from '../../interfaces/slice.interface';

const initialState: registration = {
  registerEmail: {
    response: {},
    loading: false,
  },
  registerPassword: {
    response: {},
    loading: false,
  },
  userDetails: {
    email: '',
    firstname: '',
    lastname: '',
    ssn: '',
  },
  updateUser: {
    response: {},
    loading: false,
  },
  deleteUser: {
    loading: false,
    response: {},
  },
  linktopop: {
    linkinloader: false,
    response: {},
  },
};

type RegistrationSliceReducer<payload> = CaseReducer<
  registration,
  PayloadAction<payload>
>;

const registerEmail: RegistrationSliceReducer<{
  email: string;
  firstname: string;
  lastname: string;
}> = state => {
  // state.userDetails = action.payload;
  state.registerEmail.loading = true;
};

const registerPassword: RegistrationSliceReducer<registration> = state => {
  state.registerPassword.loading = true;
};

const registerEmailSuccess: RegistrationSliceReducer<registration> = (
  state,
  action,
) => {
  state.registerEmail.response = action.payload;
  state.registerEmail.loading = false;
};

const registerPasswordSuccess: RegistrationSliceReducer<registration> = (
  state,
  action,
) => {
  state.registerPassword.response = action.payload;
  state.registerPassword.loading = false;
};

const clearRegistration: RegistrationSliceReducer<registration> = state => {
  state.registerEmail.response = {};
};

const updateUserDetails: RegistrationSliceReducer<registration> = state => {
  state.updateUser.loading = true;
};
const updateUserDetailsResponse: RegistrationSliceReducer<
  registration
> = state => {
  state.updateUser.loading = false;
};

const deleteUser: RegistrationSliceReducer<null> = state => {
  state.deleteUser.loading = true;
};

const deleteUserResponse: RegistrationSliceReducer<null> = state => {
  state.deleteUser.loading = false;
};

const linkToPop: RegistrationSliceReducer<null> = state => {
  state.linktopop.linkinloader = true;
};

const linkToPopResponse: RegistrationSliceReducer<any> = (state, action) => {
  state.linktopop.response = action.payload;
  state.linktopop.linkinloader = false;
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerEmail,
    registerEmailSuccess,
    registerPasswordSuccess,
    registerPassword,
    clearRegistration,
    updateUserDetails,
    updateUserDetailsResponse,
    deleteUser,
    deleteUserResponse,
    linkToPop,
    linkToPopResponse,
  },
});

export {registerSlice};
