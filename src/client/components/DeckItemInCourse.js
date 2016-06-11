import React from 'react';
// import { addCourseDeck } from '../actions';
import AddCourseDeck from '../containers/AddCourseDeck'
// import { connect } from 'react-redux';

const DeckItemInCourse = ({ deck, courseId }) => (
  <span>
    <strong><h4>{deck.name}</h4></strong>
    <AddCourseDeck deck={deck} courseId={courseId} />
  </span>
);

export default DeckItemInCourse;
// export default connect()(DeckItemInCourse);
