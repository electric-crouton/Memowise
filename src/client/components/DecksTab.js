import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import DeckItemInCourse from './DeckItemInCourse';
import { connect } from 'react-redux';
import CourseTabs from './CourseTabs';

const mapStateToProps = ({ decks }) => ({ decks });

class DecksTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decksInCourse: []
    }
  }

  addDeckToCourse(deck) {
    const newDeckStack = this.state.decksInCourse.push(deck);
    this.setState({
      decksInCourse: newDeckStack
    });
  }

  render() {
    return (
      <div className="container">
        <CourseTabs />
        <div>
          {decks.map((deck, idx) => 
            <DeckItemInCourse key={idx} deck={deck} />)}
        </div>
        <hr />

      </div>
    );
  }

};

export default connect(mapStateToProps)(DecksTab);