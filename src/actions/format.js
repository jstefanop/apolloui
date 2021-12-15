import NodeAPI from '../api/node'
import { setError, setSuccess } from './alert';

export const SET_FORMAT_MODAL_STATUS = 'SET_FORMAT_MODAL_STATUS';
export const FORMAT_NODE_BEGIN = 'FORMAT_NODE_BEGIN';
export const FORMAT_NODE_SUCCESS = 'FORMAT_NODE_SUCCESS';

export const setFormatModalStatus = status => ({ type: SET_FORMAT_MODAL_STATUS, status });

export const formatNodeBegin = () => ({
  type: FORMAT_NODE_BEGIN
});

export const formatNodeSuccess = (data) => ({
  type: FORMAT_NODE_SUCCESS
});

export function formatDisk() {
  return async (dispatch, getState) => {
    dispatch(formatNodeBegin());

    const { error } = await NodeAPI.formatNode({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(setError({ message: error.message }))
    } else {
      dispatch(formatNodeSuccess())
    }
  }
}

export function toggleFormatModal({ status }) {
  return async (dispatch) => {
    dispatch(setFormatModalStatus(status));
  };
}
