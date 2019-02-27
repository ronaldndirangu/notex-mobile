import Auth from './Auth';
import Note from './Note';

const signin = Auth.signinUser;
const getNotesApi = Note.getNotes;
const getNoteApi = Note.getNote;

export {
  signin,
  getNotesApi,
  getNoteApi
};
