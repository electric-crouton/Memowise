import React, { PropTypes } from 'react';
// import ClassTabs from './ClassTabs';
import DeckItem from './DeckItem';
import { connect } from 'react-redux';

const mapStateToProps = ({ decks }) => ({ decks });

const DecksTab = ({ decks }) => {

  return (
    <div className="container">
      
      <h4 className="center grey-text text-darken-4"> Decks </h4>
      <div className="card-list">
        <div className="card-columns">
          {decks.map((deck, idx) => <DeckItem key={idx} deck={deck} />)}
        </div>
      </div>
      <hr />
      
    </div>
  );
};

export default connect(mapStateToProps)(DecksTab);