import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';

type onboardState = {
  onboardState: 'character' | 'capital' | 'capacity';
  onboardpagestatus: 'welcome' | 'form' | 'complete';
  progress: number;
};
type OnboardFlowSliceReducer<Payload> = CaseReducer<
  onboardState,
  PayloadAction<Payload>
>;

const initialState: onboardState = {
  onboardState: 'character',
  onboardpagestatus: 'welcome',
  progress: 1,
};

const changeState: OnboardFlowSliceReducer<
  'character' | 'capital' | 'capacity'
> = (state, action) => {
  state.onboardState = action.payload;
};
const changepageStatus: OnboardFlowSliceReducer<
  'welcome' | 'form' | 'complete'
> = (state, action) => {
  state.onboardpagestatus = action.payload;
};
const updateProgress: OnboardFlowSliceReducer<number> = (state, action) => {
  state.progress = action.payload;
};

const onboardFlowSlice = createSlice({
  name: 'onboardFlow',
  initialState,
  reducers: {
    changeState,
    changepageStatus,
    updateProgress,
  },
});

export {onboardFlowSlice};
