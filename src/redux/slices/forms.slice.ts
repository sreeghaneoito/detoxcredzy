import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {routeEnum} from '../../enums/route.enum';
import {forms, onboardFlow, onboardStep} from '../../enums/store.enum';
type formtype = {
  data: {
    form?: forms;
    formpage?: string;
    formProgress?: number;
    onboardState?: onboardFlow;
    onboardpagestatus?: onboardStep;
  };
  formLoader?: boolean;
};

const initialState: formtype = {
  data: {
    form: forms.PHONE,
    formpage: routeEnum.SIGNUPDETAILS,
    formProgress: 1,
    onboardState: onboardFlow.CHARECTER,
    onboardpagestatus: onboardStep.WELCOME,
  },
  formLoader: false,
};

type formSliceReducer<payload> = CaseReducer<formtype, PayloadAction<payload>>;

const flushState: formSliceReducer<null> = state => {
  state = initialState;
  return state;
};

const fetchFormControl: formSliceReducer<null> = state => {
  state.formLoader = true;
};

const setFormControl: formSliceReducer<formtype> = (state, action) => {
  action.payload.data.form = action.payload.data.form || state.data.form;
  action.payload.data.formpage =
    action.payload.data.formpage || state.data.formpage;
  action.payload.data.formProgress =
    action.payload.data.formProgress || state.data.formProgress;
  action.payload.data.onboardState =
    action.payload.data.onboardState || state.data.onboardState;
  action.payload.data.onboardpagestatus =
    action.payload.data.onboardpagestatus || state.data.onboardpagestatus;

  state.data = action.payload.data;
  state.formLoader = false;
};

const formControlResponse: formSliceReducer<formtype> = (state, action) => {
  state.data = action.payload.data;
  state.formLoader = false;
  return state;
};

const formslice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    flushState,
    fetchFormControl,
    setFormControl,
    formControlResponse,
  },
});

export {formslice};
