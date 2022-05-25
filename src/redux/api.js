import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import local from './local';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const api = {};

const dataFilter = (arr, ListOfKeys, listOfFilters) => (
  arr.map((item) => {
    const arrObj = ListOfKeys.map((key, index) => {
      const IsArray = (item) => (
        Array.isArray(item) ? item[0] : item
      );
      return {
        [key]: IsArray(item[listOfFilters[index]]),
      };
    });
    return Object.assign({}, ...arrObj, { reserved: false });
  })
);

api.fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const apiCall = await axios
    .get(baseURL)
    .then((response) => (dataFilter(
      response.data,
      ['id', 'name', 'info', 'img'],
      ['id', 'rocket_name', 'description', 'flickr_images'],
    )));
  local.setRockets(apiCall);
  return apiCall;
});

export default api;
