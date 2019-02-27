import React, { PureComponent } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { colors } from '../colors';

export default class Button extends PureComponent {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.secondary,
    padding: 15,
    margin: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.default,
    fontSize: 15
  }
})
