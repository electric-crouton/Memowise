import React from 'react'
import { connect } from 'react-redux'
import { addCourseDeck } from '../actions'

let AddCourseDeck = ({ dispatch, courseId, deck }) => {

  return (
    <div>
      <button onClick={dispatch(addCourseDeck(courseId, deck._id))} className="btn cyan">Add Deck</button>
    </div>
  )
}

AddCourseDeck = connect()(AddCourseDeck)

export default AddCourseDeck