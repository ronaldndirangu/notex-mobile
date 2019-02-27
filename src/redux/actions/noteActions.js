import { getNotesApi, getNoteApi } from '../../services';
import {
  getNotes,
  getNotesSuccess,
  getNotesFailure,
  getNote,
  getNoteSuccess,
  getNoteFailure
} from '../actionCreators';

export const fetchNotes = () => dispatch => {
  dispatch(getNotes());
  getNotesApi()
    .then(res => dispatch(getNotesSuccess(res.data.notes)))
    .catch(err => dispatch(getNotesFailure(err.response.data)))
}

export const fetchNote = id => dispatch => {
  dispatch(getNote());
  getNoteApi(id)
    .then(res => dispatch(getNoteSuccess(res.data.note)))
    .catch(err => dispatch(getNoteFailure(err.response.data)))
}
