import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions'

let AddStudent = ({ dispatch, courseId }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addStudent(courseId, input.value))
        input.value = ''
      }}>
        <div className="input-field col s6"> 
          <input ref={node => {
            input = node
          }} 
          className="validate"
          type="text"
          id="student_email"/>
          <label for="student_email">Student's email address</label>
        </div>
        <button className="btn-large cyan lighten-3" type="submit">Add</button>
      </form>
    </div>
  )
}
AddStudent = connect()(AddStudent)

export default AddStudent