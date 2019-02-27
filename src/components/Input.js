import React, { PureComponent } from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { colors } from '../colors';

export default class Input extends PureComponent {
  render() {
    const { onChangeText, placeHolder} = this.props;
    console.log(this.props);
    return (
      <View style={styles.inputContainer}>
        <TextInput
          { ...this.props }
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          autoCapitalize="none"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.default,
    width: '80%',
    marginTop: 10,
  },
  input: {
    height: 50,
    padding: 10
  }
})