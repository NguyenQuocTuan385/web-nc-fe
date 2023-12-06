export const SET_LOADING_REDUCER = 'SET_LOADING_REDUCER';
export const SET_USER_LOGGED = 'SET_USER_LOGGED';

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING_REDUCER,
    isLoading
  }
}

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: SET_USER_LOGGED,
    isLoggedIn
  }
}