import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

const initialState = new Map();

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const coursesMap = new Map(
        action.data.map((course) => [
          course.id,
          { ...course, isSelected: false },
        ])
      );
      return coursesMap;
    case SELECT_COURSE:
      return new Map(
        [...state].map(([id, course]) => {
          if (id === action.index) {
            return [id, { ...course, isSelected: true }];
          }
          return [id, course];
        })
      );
    case UNSELECT_COURSE:
      return new Map(
        [...state].map(([id, course]) => {
          if (id === action.index) {
            return [id, { ...course, isSelected: false }];
          }
          return [id, course];
        })
      );
    default:
      return state;
  }
}
