import React from 'react';

class DeckItemInCourse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <strong><h4>{this.props.deck.name}</h4></strong>
        <button className="btn cyan">Add Deck</button>
      </span>
    );
  }
}

export default DeckItemInCourse;
