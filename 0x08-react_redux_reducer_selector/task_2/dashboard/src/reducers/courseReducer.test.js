// courseReducer.test.js
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// Test suite
describe('courseReducer', () => {
  // Test 1: Verify the default state returns an empty array
  it('should return the default state with an empty array', () => {
    const newState = courseReducer(undefined, {});
    expect(newState.get('courses')).toEqual([]);
  });

  // Test 2: Verify FETCH_COURSE_SUCCESS returns the data passed
  it('should update state with data on FETCH_COURSE_SUCCESS', () => {
    const coursesData = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data: coursesData };
    const newState = courseReducer(undefined, action);

    expect(newState.get('courses')).toEqual(coursesData.map((course) => ({ ...course, isSelected: false })));
  });

  // Test 3: Verify SELECT_COURSE returns the data with the right item updated
  it('should update isSelected to true on SELECT_COURSE', () => {
    const initialState = Map({
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        { id: 3, name: 'React', credit: 40, isSelected: false },
      ],
    });

    const action = { type: SELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);

    expect(newState.get('courses')).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  // Test 4: Verify UNSELECT_COURSE returns the data with the right item updated
  it('should update isSelected to false on UNSELECT_COURSE', () => {
    const initialState = Map({
      courses: [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        { id: 3, name: 'React', credit: 40, isSelected: false },
      ],
    });

    const action = { type: UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);

    expect(newState.get('courses')).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });
});
