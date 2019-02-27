import axios from 'axios';
import { AsyncStorage } from 'react-native';

const baseUrl = 'http://localhost:5000/api/v1'

AsyncStorage.getItem('jwt-token')
  .then(token => {
    axios.defaults.headers.common['Authorization'] = token;
  })
  .catch(err => console.log(err))

export default class Note {
  static getNotes() {
    return axios.get(`${baseUrl}/notes`);
  }

  static getNote(id) {
    return axios.get(`${baseUrl}/notes/${id}`);
  }
};
