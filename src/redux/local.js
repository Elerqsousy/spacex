import { createAsyncThunk } from '@reduxjs/toolkit';

const local = {};

local.setRockets = (data, name = 'rockets') => {
  localStorage.setItem(name, JSON.stringify(data));
};

local.getRockets = createAsyncThunk('rockets/getRocketsFromLocal', async (name = 'rockets') => {
  const data = await JSON.parse(localStorage.getItem(name));
  return data;
});

export default local;
