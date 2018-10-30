export const SET_ERROR = 'SET_ERROR'
export const setError = ({ message }) => ({ type: SET_ERROR, message})

export const CLEAR_ERROR = 'CLEAR_ERROR'
export const clearError = () => ({ type: CLEAR_ERROR })