import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import Note from '../components/Note';
import { fetchNotes } from '../redux/actions';
import { connect } from 'react-redux';
import { colors } from '../colors';

class Home extends Component {
  componentDidMount() {
    const { fetchNotes: getNotes } = this.props;
    getNotes();
  }

  onPress = (NoteId) => {
    const { navigate } = this.props.navigation;
    navigate('ViewNote', { id: NoteId });
  }

  render() {
    const { notes } = this.props;
    return (
      <ScrollView style={styles.container}>
        {
          notes.notes && notes.notes.map(note => 
            <Note 
              key={note.id}
              note={note}
              onPress={() => this.onPress(note.id)}
            />
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    width: '100%'
  }
});

const mapStateToProps = state => ({
 notes: state.notes
});

const actionCreators = {
  fetchNotes
};

export default connect(mapStateToProps, actionCreators)(Home);
