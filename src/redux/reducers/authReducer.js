import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../constants';

const initialState = {
  user: {},
  error: '',
  isLoading: false
};

export default authReducer = (state=initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}