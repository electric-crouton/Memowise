import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import DeckItemInCourse from './DeckItemInCourse';
import { connect } from 'react-redux';
import CourseTabs from './CourseTabs';

const mapStateToProps = ({ decks }) => ({ decks });

const DecksTab = ({ decks }) => {

  return (
    <div className="container">
      <CourseTabs />
      <div>
        {decks.map((deck, idx) => <DeckItemInCourse key={idx} deck={deck} />)}
      </div>
      <hr />

    </div>
  );
};

export default connect(mapStateToProps)(DecksTab);