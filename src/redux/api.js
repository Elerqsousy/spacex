import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import local from './local';

const baseURLRockets = 'https://api.spacexdata.com/v3/rockets';
const baseURLMissions = 'https://api.spacexdata.com/v3/missions';

const api = {};

const dataFilter = (arr, ListOfKeys, listOfFilters) => arr.map((item) => {
  const arrObj = ListOfKeys.map((key, index) => {
    const IsArray = (item) => (Array.isArray(item) ? item[0] : item);
    return {
      [key]: IsArray(item[listOfFilters[index]]),
    };
  });
  return Object.assign({}, ...arrObj, { reserved: false });
});

api.fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const apiCall = await axios
    .get(baseURLRockets)
    .then((response) => dataFilter(
      response.data,
      ['id', 'name', 'info', 'img', 'url'],
      ['id', 'rocket_name', 'description', 'flickr_images', 'wikipedia'],
    ));
  local.setToLocal(apiCall);
  return apiCall;
});

api.FETCH_DATA = createAsyncThunk('missions/fetchMissions', async () => {
  const apiCall = await axios.get(baseURLMissions).then((response) => response);
  local.setToLocal(apiCall, 'missions');
  return apiCall;
});

export default api;
