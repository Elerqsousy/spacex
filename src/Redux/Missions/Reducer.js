import ActionTypes from './ActionTypes';
import {
  setLoadingData, setData, setError, setLocalDataLoading, setLocalData, setLocalDataError,
} from './DataActions';

const URL = 'https://api.spacexdata.com/v3/missions';

export const getData = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setData(data));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};

export const getLocal = () => (dispatch) => {
  dispatch(setLocalDataLoading());
  const data = JSON.parse(localStorage.getItem('data'));
  if (data) {
    return dispatch(setLocalData(data));
  }
  return dispatch(setLocalDataError('Local Data is unpopulated!'));
};

const setToLocal = (data) => localStorage.setItem('data', JSON.stringify(data));

const initialState = {
  data: [],
  loading: false,
  error: null,
  joinedMissions: [],
};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING: {
      const newState = {
        ...state,
        loading: true,
      };
      setToLocal(newState);
      return newState;
    }
    case ActionTypes.FETCH_DATA: {
      const newState2 = {
        ...state,
        data: payload,
        loading: false,
      };
      setToLocal(newState2);
      return newState2;
    }

    case ActionTypes.FETCH_DATA_ERROR: {
      const newState3 = {
        ...state,
        loading: false,
        error: payload,
      };
      setToLocal(newState3);
      return newState3;
    }

    case ActionTypes.FETCH_LOCAL_DATA: {
      const newState4 = {
        ...payload,
      };
      setToLocal(newState4);
      return newState4;
    }

    case ActionTypes.FETCH_LOCAL_DATA_LAODING: {
      const newState5 = {
        ...state,
        loading: true,
      };
      return newState5;
    }

    case ActionTypes.FETCH_LOCAL_DATA_ERROR: {
      const newState6 = {
        ...state,
        loading: false,
        error: payload,
      };
      return newState6;
    }

    case ActionTypes.JOIN_MISSION: {
      const newState7 = {
        ...state, joinedMissions: [...state.joinedMissions, payload],
      };
      setToLocal(newState7);
      return newState7;
    }

    case ActionTypes.LEAVE_MISSION: {
      const newState8 = {
        ...state,
        joinedMissions: [...state.joinedMissions.filter((missions) => missions !== payload)],
      };
      setToLocal(newState8);
      return newState8;
    }

    default:
      return state;
  }
};
export default DataReducer;
