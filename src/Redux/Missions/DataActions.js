import ActionTypes from './ActionTypes';

export const setLoadingData = (data) => ({
  type: ActionTypes.FETCH_DATA_LOADING,
  payload: data,
});

export const setData = (data) => ({
  type: ActionTypes.FETCH_DATA,
  payload: data,
});

export const setError = (error) => ({
  type: ActionTypes.FETCH_DATA_ERROR,
  payload: error,
});

export const setJoinMission = (payload) => ({
  type: ActionTypes.JOIN_MISSION,
  payload,
});

export const setLeaveMission = (payload) => ({
  type: ActionTypes.LEAVE_MISSION,
  payload,
});

export const setLocalData = (payload) => ({
  type: ActionTypes.FETCH_LOCAL_DATA,
  payload,
});

export const setLocalDataLoading = (payload) => ({
  type: ActionTypes.FETCH_LOCAL_DATA_LAODING,
  payload,
});

export const setLocalDataError = (payload) => ({
  type: ActionTypes.FETCH_LOCAL_DATA_ERROR,
  payload,
});
