'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  searchQuery: '',
  formData: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },



    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

  },
});

export const { setLanguage, setSearchQuery} = appSlice.actions;
export default appSlice.reducer;
