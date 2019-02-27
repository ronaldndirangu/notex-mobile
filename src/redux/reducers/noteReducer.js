import {
  GET_NOTES,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  GET_NOTE,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE
} from '../constants';

const initialState = {
  notes: [],
  note: {},
  error: '',
  isLoading: false
};

export default noteReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        isLoading: true
      }
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notes: action.payload
      }
    case GET_NOTES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case GET_NOTE:
      return {
        ...state,
        isLoading: true
      }
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        note: action.payload
      }
    case GET_NOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}