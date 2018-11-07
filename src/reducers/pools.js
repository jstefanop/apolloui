import { SET_POOLS_DATA, SET_POOLS_LOADING } from '../actions/pool';

const pools = (state = {}, action) => {
  switch (action.type) {
    case SET_POOLS_LOADING:
      return { ...state, loading: true };
    case SET_POOLS_DATA:
      return { ...state, pools: action.pools, loading: false };
    default:
      return state;
  }
};

export default pools;
