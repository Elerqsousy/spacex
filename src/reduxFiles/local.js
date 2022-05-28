import { createAsyncThunk } from '@reduxjs/toolkit';

const local = {};

local.setToLocal = (data, name = 'rockets') => {
  localStorage.setItem(name, JSON.stringify(data));
};

local.getRockets = createAsyncThunk(
  'rockets/getRocketsFromLocal',
  async (name = 'rockets') => {
    const data = await JSON.parse(localStorage.getItem(name));
    return data;
  },
);

local.FETCH_LOCAL_DATA = createAsyncThunk(
  'missions/getMissionsFromLocal',
  async (name = 'missions') => {
    const data = await JSON.parse(localStorage.getItem(name));
    return data;
  },
);

export default local;
