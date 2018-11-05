
import McuAPI from '../api/mcu';
import { setError } from './alert';

export const FETCH_MCU_BEGIN = 'FETCH_MCU_BEGIN';
export const FETCH_MCU_SUCCESS = 'FETCH_MCU_SUCCESS';
export const FETCH_MCU_FAILURE = 'FETCH_MCU_FAILURE';

export const fetchMcuBegin = () => ({
  type: FETCH_MCU_BEGIN,
});

export const fetchMcuSuccess = data => ({
  type: FETCH_MCU_SUCCESS,
  payload: { data },
});

export const fetchMcuFailure = ({ error }) => ({
  type: FETCH_MCU_FAILURE,
  error,
});

export function fetchMcu() {
  return async (dispatch, getState) => {
    dispatch(fetchMcuBegin());
    const { result, error } = await McuAPI.fetchMcu({ accessToken: getState().auth.accessToken });

    if (error) {
      dispatch(fetchMcuFailure({ error: error.message }));
    } else {
      dispatch(fetchMcuSuccess(result));
    }
  };
}
