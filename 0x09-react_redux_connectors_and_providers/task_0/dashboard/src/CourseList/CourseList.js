import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

export default function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    marginTop: "1.25rem",
    border: "1px solid",
    width: "80%",
    borderColor: "rgba(0, 0, 0, 0.32)",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1.25rem",
    color: "#000000",
  },
  tableHeader: {
    textAlign: "center",
    border: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.32)",
    padding: "0.5rem",
  },
  tableHeaderFirst: {
    textAlign: "left",
    border: "1px solid",
    borderRight: "none",
    borderColor: "rgba(0, 0, 0, 0.32)",
  },
  tableHeaderSecond: {
    textAlign: "left",
    border: "1px solid",
    borderLeft: "none",
    borderRight: "none",
    borderColor: "rgba(0, 0, 0, 0.32)",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
