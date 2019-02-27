import { combineReducers } from 'redux';
import auth from './authReducer';
import notes from './noteReducer';

export default combineReducers({
  auth,
  notes
});
