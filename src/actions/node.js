import NodeAPI from '../api/node'
import { setError } from './alert'

export const FETCH_NODE_BEGIN = 'FETCH_NODE_BEGIN';
export const FETCH_NODE_SUCCESS = 'FETCH_NODE_SUCCESS';
export const FETCH_NODE_FAILURE = 'FETCH_NODE_FAILURE';
export const START_NODE_SUCCESS = 'START_NODE_SUCCESS';
export const STOP_NODE_SUCCESS = 'STOP_NODE_SUCCESS';

export const fetchNodeBegin = () => ({
  type: FETCH_NODE_BEGIN
});

export const fetchNodeSuccess = (data) => ({
  type: FETCH_NODE_SUCCESS,
  payload: { data }
});

export const fetchNodeFailure = ({ error }) => ({
  type: FETCH_NODE_FAILURE,
  error
});

export const startNodeSuccess = (data) => ({
  type: START_NODE_SUCCESS,
  payload: { data }
});

export const stopNodeSuccess = (data) => ({
  type: STOP_NODE_SUCCESS,
  payload: { data }
});

export function fetchNode() {
  return async (dispatch, getState) => {
    dispatch(fetchNodeBegin());

    const {
      result,
      error
    } = await NodeAPI.fetchNode({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(fetchNodeFailure({ error: error.message }));
    } else {
      dispatch(fetchNodeSuccess(result));
    }
  };
}

export function startNode() {
  return async (dispatch, getState) => {
    const { error } = await NodeAPI.startNode({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }))
    } else {
      dispatch(startNodeSuccess())
    }
  }
}

export function stopNode() {
  return async (dispatch, getState) => {
    const { error } = await NodeAPI.stopNode({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }))
    } else {
      dispatch(stopNodeSuccess())
    }
  }
}
