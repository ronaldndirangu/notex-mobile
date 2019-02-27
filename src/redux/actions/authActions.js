import { signin } from '../../services';
import { AsyncStorage } from 'react-native';
import {
  loginUser,
  loginUserSuccess,
  loginUserFailure
} from '../actionCreators';

export const login = (userData, navigation) => dispatch => {
  dispatch(loginUser());
  signin(userData)
    .then(res => {
      AsyncStorage.setItem('jwt-token', res.data.token)
      .then(() => {
        const { navigate } = navigation;
        dispatch(loginUserSuccess(res.data))
        navigate('My Notes');
      })
      .catch(err => dispatch(loginUserFailure(err.response.data.error)))
    })
    .catch(err => dispatch(loginUserFailure(err.response.data.error)))
}
