import React from 'react'
import { connect } from 'react-redux'
import { addCourse } from '../actions'

let AddCourse = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCourse(input.value))
        input.value = ''
      }}>
        <div className="input-field col s6"> 
          <input ref={node => {
            input = node
          }} 
          className="validate"
          type="text"
          id="course_name"/>
          <label for="course_name">Course name</label>
        </div>
        <button className="btn-large cyan lighten-3" type="submit">Add</button>
      </form>
    </div>
  )
}
AddCourse = connect()(AddCourse)

export default AddCourse
