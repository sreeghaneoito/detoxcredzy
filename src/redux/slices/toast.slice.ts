import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';

type initialtoast = {
  status: boolean;
  message: string;
};
type ToastSliceReducer<payload> = CaseReducer<
  initialtoast,
  PayloadAction<payload>
>;
const initialState: initialtoast = {
  status: false,
  message: '',
};
const toastStatus: ToastSliceReducer<initialtoast> = (state, action) => {
  state = action.payload;
  return state;
};

const showToast: ToastSliceReducer<initialtoast> = (state, action) => {
  state = action.payload;
  return state;
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastStatus,
    showToast,
  },
});
export {toastSlice};
