import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {createwsaPayload, kba} from '../../interfaces/slice.interface';

const initialState: kba = {
  createkba: {
    data: {
      address: {
        city: '',
        state: '',
        street: '',
        zip: '',
      },
      dob: '',
      first_name: '',
      last_name: '',
      ssn: '',
    },
    loading: false,
    response: {},
  },
  questions: {
    response: {},
    loading: false,
  },
  submitAnswers: {
    response: {},
    loading: false,
    answers: {},
    statusCode: 0,
  },
};

type kbaSlicereducer<payload> = CaseReducer<kba, PayloadAction<payload>>;

const createSwa: kbaSlicereducer<createwsaPayload> = (state, action) => {
  state.createkba.data = action.payload;
  state.createkba.loading = true;
};

const createSwaResponse: kbaSlicereducer<null> = (state, action) => {
  state.createkba.loading = false;
  state.createkba.response = action.payload;
};

const fetchSwaQuestions: kbaSlicereducer<null> = state => {
  state.questions.loading = true;
};

const fetchSwaQuestionsResponse: kbaSlicereducer<{}> = (state, action) => {
  state.questions.response = action.payload;
};

const saveSwaAnswers: kbaSlicereducer<{}> = (state, action) => {
  state.submitAnswers.answers = action.payload;
  state.submitAnswers.loading = true;
};

const saveSwaAnswersResponse: kbaSlicereducer<{}> = (state, action) => {
  state.submitAnswers.response = action.payload;
  state.submitAnswers.loading = false;
};

const changeStatusCode: kbaSlicereducer<number> = (state, action) => {
  state.submitAnswers.statusCode = action.payload;
};

const kbaSlice = createSlice({
  initialState,
  name: 'kba',
  reducers: {
    createSwa,
    createSwaResponse,
    fetchSwaQuestions,
    fetchSwaQuestionsResponse,
    saveSwaAnswers,
    saveSwaAnswersResponse,
    changeStatusCode,
  },
});
export {kbaSlice};
