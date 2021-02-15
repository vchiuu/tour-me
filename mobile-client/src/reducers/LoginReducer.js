import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  onLoad: true,
  formType: 'SignIn',
};

export const loginSlice = createSlice({
  name: 'loginRegistration',
  initialState: INITIAL_STATE,
  reducers: {
    toggleForm: (state, action) => {
      const { onLoad, formType } = action.payload;
      state.onLoad = onLoad;
      state.formType = formType;
    },
  },
});

export const loginReducer = loginSlice.reducer;
