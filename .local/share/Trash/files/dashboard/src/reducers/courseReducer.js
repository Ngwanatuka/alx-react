// courseReducer.js
import { Map, fromJS } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Initial state
const initialState = Map({
  courses: Map(),
});

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge it with the state
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep(fromJS(normalizedData));

    case SELECT_COURSE:
    case UNSELECT_COURSE:
      // Update the value of the item using setIn
      return state.setIn(['courses', action.index, 'isSelected'], action.type === SELECT_COURSE);

    default:
      return state;
  }
};

export default courseReducer;
