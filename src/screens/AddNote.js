import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Input from '../components/Input';
import { colors } from '../colors';

export default class AddNote extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input />
        <Input multiline={true} numberOfLines={20} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '100%'
  }
});
