import React from 'react';
import { fetchStudents, selectCourse } from '../actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToState = (dispatch) => ({
  fetchStudents: (courseId) => dispatch(fetchStudents(courseId)),
  selectCourse: (course) => dispatch(selectCourse(course))
});

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleCourseClick = this.handleCourseClick.bind(this);
  }

  handleCourseClick() {
    this.props.selectCourse(this.props.course);
    this.props.fetchStudents(this.props.course._id);
    browserHistory.push(`/courses/${this.props.course._id}/students`);
  }

  render() {
    return (
      <div className="container">
        <div onClick={this.handleCourseClick} >{this.props.course.courseName}</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToState)(CourseInfo);