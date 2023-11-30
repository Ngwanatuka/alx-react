// courseReducer.js
import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// Default state
const initialState = Map({
  courses: [],
});

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Update courses and set isSelected to false for each item
      const updatedCourses = action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      return state.set('courses', updatedCourses);

    case SELECT_COURSE:
      // Update isSelected for the selected course
      const selectedCourseIndex = state
        .get('courses')
        .findIndex((course) => course.id === action.index);

      if (selectedCourseIndex !== -1) {
        return state.setIn(['courses', selectedCourseIndex, 'isSelected'], true);
      }
      return state;

    case UNSELECT_COURSE:
      // Update isSelected for the unselected course
      const unselectedCourseIndex = state
        .get('courses')
        .findIndex((course) => course.id === action.index);

      if (unselectedCourseIndex !== -1) {
        return state.setIn(['courses', unselectedCourseIndex, 'isSelected'], false);
      }
      return state;

    default:
      return state;
  }
};

export default courseReducer;
