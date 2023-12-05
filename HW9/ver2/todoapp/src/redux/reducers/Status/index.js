import { act } from 'react-dom/test-utils';
import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: false
};

const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.SET_LOADING_REDUCER:
        return {
            ...state,
            isLoading: action.isLoading
        }
      case types.SET_USER_LOGGED:
        return {
          ...state,
          isLoggedIn: action.isLoggedIn
        }
      default:
          return state;
  }
}
export default StatusReducer;