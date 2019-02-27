import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  Button,
  Input
} from '../components';
import { colors } from '../colors';
import { login } from '../redux/actions';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  }

  onPress = () => {
    const { navigation } = this.props;
    const { login: loginUser } = this.props;
    const { email, password } = this.state;
    loginUser({email, password}, navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>NoteX</Text>
        <Input
          style={styles.input}
          onChangeText={(text) => this.onChangeText('email', text)}
          placeHolder="Enter email..."
        />
        <Input
          style={styles.input}
          onChangeText={(text) => this.onChangeText('password', text)}
          placeHolder="Enter password..."
        />
        <Button
          title="Login"
          onPress={this.onPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    fontSize: 50,
    color: colors.secondary,
    margin: 20,
    fontWeight: '500'
  },
  input: {
    fontSize: 10
  }
})

const actionCreators = {
  login
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actionCreators)(Login);
