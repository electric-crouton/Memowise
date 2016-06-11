import React, { PropTypes } from 'react';
import DeckItemInCourse from './DeckItemInCourse';
import { connect } from 'react-redux';
import CourseTabs from './CourseTabs';
import { receiveCourseDecks, receiveDecks, failedRequest } from '../actions'

const mapStateToProps = ({ decks, courseDecks }) => ({ decks, courseDecks });

class DecksTab extends React.Component {
  constructor(props) {
    super(props);
  }

  getCourseDecks() {
    fetch(`/api/courses/${this.props.params.courseId}/decks`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(courseDecks => this.props.dispatch(receiveCourseDecks(courseDecks)))
  }

  getPublicDecks() {
    fetch('/api/decks', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  componentWillMount() {
    console.log('inside componentWillMount in DecksTab');
    this.getPublicDecks();
    this.getCourseDecks();
  }

  render() {
    console.log('this.props.courseDecks: ', this.props.courseDecks);
    return (
      <div className="container">
        <CourseTabs />
        <div>
          {this.props.decks.map((deck, idx) => 
            <DeckItemInCourse key={idx} deck={deck} courseId={this.props.params.courseId} />)}
        </div>
        <hr />
        <div>
          {this.props.courseDecks.decks.map(courseDeck => 
            <div>{courseDeck.name}</div>
          )}
        </div>
      </div>
    );
  }

};

export default connect(mapStateToProps)(DecksTab);