import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../colors';
import { fetchNote } from '../redux/actions';

class ViewNote extends Component {
  componentDidMount() {
    const { fetchNote } = this.props;
    const { id } = this.props.navigation.state.params;
    fetchNote(id)
  }

  render() {
   const { note } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.noteContainer}>
          <View style={styles.noteTitleWrapper}>
            <Text style={styles.noteTitle}>{note.title}</Text>
          </View>
          <Text style={styles.noteBody}>{note.body}</Text>
        </View>
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
  },
  noteContainer: {
    backgroundColor: colors.default,
    width: 350,
    height: 600,
    padding: 10
  },
  noteTitleWrapper: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    margin: 10
  },
  noteTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'500',
    margin: 10,
    color: colors.secondary
  },
});

const mapStateToProps = state => ({
  note: state.notes.note
})

const actionCreators = {
  fetchNote
}

export default connect(mapStateToProps, actionCreators)(ViewNote);
