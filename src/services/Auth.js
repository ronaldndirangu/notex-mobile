import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/v1'

export default class Auth {
  static signinUser(userData) {
    return axios.post(`${baseUrl}/auth/signin`, userData);
  }
}