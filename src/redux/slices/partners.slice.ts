import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {partners, partnersType} from '../../interfaces/slice.interface';

const initialState: partnersType = {
  partners: {
    data: [
      {
        contact_email: '',
        contact_name: '',
        contact_number: '',
        id: 0,
        is_primary: false,
        logo: '',
        partner_description: '',
        partner_name: '',
      },
    ],
    loading: false,
    partnersStatusCode: 0,
  },
};

type partnerSliceReduces<payload> = CaseReducer<
  partnersType,
  PayloadAction<payload>
>;

const fetchPartners: partnerSliceReduces<null> = state => {
  if (state.partners.partnersStatusCode !== 200) {
    state.partners.loading = true;
  }
};

const fetchPartnersResponse: partnerSliceReduces<partners> = (
  state,
  action,
) => {
  state.partners.data = action.payload;
  state.partners.loading = false;
};

const changePartnersStatusCode: partnerSliceReduces<number> = (
  state,
  action,
) => {
  state.partners.partnersStatusCode = action.payload;
};

const partnerSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    fetchPartners,
    fetchPartnersResponse,
    changePartnersStatusCode,
  },
});

export {partnerSlice};
