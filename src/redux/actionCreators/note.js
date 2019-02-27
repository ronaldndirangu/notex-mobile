import {
  GET_NOTES,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  GET_NOTE,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE
} from '../constants';

export const getNotes = () => ({
  type: GET_NOTES
});

export const getNotesSuccess = (notes) => ({
  type: GET_NOTES_SUCCESS,
  payload: notes
});

export const getNotesFailure = (error) => ({
  type: GET_NOTES_FAILURE,
  error
});

export const getNote = () => ({
  type: GET_NOTE
});

export const getNoteSuccess = (note) => ({
  type: GET_NOTE_SUCCESS,
  payload: note
});

export const getNoteFailure = (error) => ({
  type: GET_NOTE_FAILURE,
  error
});
