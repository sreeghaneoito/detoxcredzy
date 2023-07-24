import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
type utils = {
  apploaded: boolean;
};

const initialState: utils = {
  apploaded: false,
};

type UtilSliceReducer<payload> = CaseReducer<utils, PayloadAction<payload>>;

const changeApploaded: UtilSliceReducer<utils> = (state, action) => {
  state.apploaded = action.payload.apploaded;
  return state;
};

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    changeApploaded,
  },
});
export {utilsSlice};
