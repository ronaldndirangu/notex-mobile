import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../constants';

export const loginUser = () =>({
  type: LOGIN_USER
});

export const loginUserSuccess = (userData) =>({
  type: LOGIN_USER_SUCCESS,
  payload: userData
});

export const loginUserFailure = (error) =>({
  type: LOGIN_USER_FAILURE,
  error
});
