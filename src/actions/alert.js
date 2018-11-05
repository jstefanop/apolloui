export const SET_ERROR = 'SET_ERROR';
export const setError = ({ message }) => ({ type: SET_ERROR, message });

export const SET_SUCCESS = 'SET_SUCCESS';
export const setSuccess = ({ message }) => ({ type: SET_SUCCESS, message });

export const CLEAR_ALERT = 'CLEAR_ALERT';
export const clearAlert = () => ({ type: CLEAR_ALERT });
