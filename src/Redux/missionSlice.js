import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const initialState = {
  data: [],
  loading: false,
  error: null,
  joinedMissions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const newState = {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload],
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
    leaveMission(state, action) {
      const newState = {
        ...state,
        joinedMissions: [
          ...state.joinedMissions.filter(
            (missions) => missions !== action.payload,
          ),
        ],
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
  },
  extraReducers: {
    [api.FETCH_DATA.pending]: (state) => ({ ...state, loading: true }),
    [api.FETCH_DATA.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [api.FETCH_DATA.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    [local.FETCH_LOCAL_DATA.pending]: (state) => ({ ...state, loading: true }),
    [local.FETCH_LOCAL_DATA.fulfilled]: (action) => ({ ...action.payload }),
    [local.FETCH_LOCAL_DATA.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
