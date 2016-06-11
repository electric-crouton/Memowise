import React from 'react';
import { Link } from 'react-router';

const CourseTabs = ({ courseId }) => (
  <nav>
    <div className="nav-wrapper teal lighten-2">
      <a href="#" className="brand-logo right">Courses</a>
      <ul className="left">
        <li>
          <Link to="/courses/:courseId/students">Students</Link>
        </li>
        <li>
          <Link to={`/courses/${courseId}/decks`}>Decks</Link>
        </li>
      </ul>
    </div>  
  </nav>
);

export default CourseTabs;