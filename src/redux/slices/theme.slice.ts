import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';

type themeState = {
  choosedTheme: String;
};
type ThemeSliceReducer<Payload> = CaseReducer<
  themeState,
  PayloadAction<Payload>
>;

const initialState: themeState = {
  choosedTheme: 'light',
};

const chooseTheme: ThemeSliceReducer<string> = (state, action) => {
  state.choosedTheme = action.payload;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    chooseTheme,
  },
});

export {themeSlice};
