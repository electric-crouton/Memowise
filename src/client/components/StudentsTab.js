import React, { PropTypes } from 'react';
import AddStudent from '../containers/AddStudent';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { receiveStudents, failedRequest } from '../actions'
import CourseTabs from './CourseTabs'

const mapStateToProps = ({ students }) => ({ students });
// function mapStateToProps(state, ownProps) {
//   return { students: state.students[ownProps.courseId] }
// }

class StudentsTab extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    fetch(`/api/courses/${this.props.params.courseId}/students`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(students => this.props.dispatch(receiveStudents(students)))
  }

  render() {
    return (
      <div className="container">
        <CourseTabs />
        <h1>
          {this.props.students.courseName}
        </h1>
        <AddStudent courseId={this.props.params.courseId} />
        <div>
          {this.props.students.students.map(student =>
            <div>
              <span>{student.name} {student.email}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps)(StudentsTab);