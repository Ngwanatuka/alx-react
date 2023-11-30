import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

export default function CourseList({ listCourses }) {
  if (listCourses.length === 0) {
    return <div>No courses available yet</div>;
  }
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
      {listCourses.map((course, index) => (
        <CourseListRow
        key={index}
        textFirstCell={course.name}
        textSecondCell={course.credit.toString()}
        isHeader={course.isHeader}
        />
      ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
