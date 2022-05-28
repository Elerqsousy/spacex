import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: { status: 'none', list: [] },
  reducers: {
    toggleReservation(state, action) {
      const newlist = state.list.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: !item.reserved };
        }
        return item;
      });
      local.setToLocal(newlist);
      return {
        ...state,
        list: [...newlist],
      };
    },
  },
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
      list: action.payload,
      status: 'idle',
    }),
    [local.getRockets.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export const { toggleReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
