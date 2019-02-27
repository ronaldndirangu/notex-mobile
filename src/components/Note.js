import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { colors } from '../colors';
import moment from 'moment';

export default class Note extends PureComponent {
  render() {
    const { note, onPress } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>{note.title}</Text>
          <Text style={styles.date}>{moment(note.updatedAt).format('lll')}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.default,
    margin: 10,
    padding: 10,
  }
})