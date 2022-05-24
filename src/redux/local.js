import { createAsyncThunk } from '@reduxjs/toolkit';

const local = {};

local.setRockets = (data, name) => {
  localStorage.setItem(name, JSON.stringify(data));
};

local.getRockets = createAsyncThunk('rockets/getRocketsFromLocal', async (name) => {
  const data = await JSON.parse(localStorage.getItem(name));
  return data;
});

export default local;
