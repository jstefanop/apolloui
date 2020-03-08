import NodeAPI from '../api/node'

export const FETCH_NODE_BEGIN = 'FETCH_NODE_BEGIN';
export const FETCH_NODE_SUCCESS = 'FETCH_NODE_SUCCESS';
export const FETCH_NODE_FAILURE = 'FETCH_NODE_FAILURE';

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
