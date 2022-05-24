import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const bookSlice = createSlice({
  name: 'rockets',
  initialState: { status: 'none', list: [] },
  extraReducers: {
    [api.fetchRockets.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
      status: 'idle',
    }),
    [api.fetchRockets.rejected]: (state) => ({ ...state, status: 'fail' }),
    [local.getRockets.pending]: (state) => ({ ...state, status: 'loading' }),
    [local.getRockets.fulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
      status: 'idle',
    }),
    [local.getRockets.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export default bookSlice.reducer;
