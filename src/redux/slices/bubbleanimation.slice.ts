import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {bubbleanimation} from '../../interfaces/slice.interface';

type ToastSliceReducer<payload> = CaseReducer<
  bubbleanimation,
  PayloadAction<payload>
>;
const initialState: bubbleanimation = {
  currentPosition: 0,
};
const changeBubblePosition: ToastSliceReducer<bubbleanimation> = (
  state,
  action,
) => {
  state = action.payload;
  return state;
};

const bubbleanimationSlice = createSlice({
  name: 'bubbleanimation',
  initialState,
  reducers: {
    changeBubblePosition,
  },
});
export {bubbleanimationSlice};
