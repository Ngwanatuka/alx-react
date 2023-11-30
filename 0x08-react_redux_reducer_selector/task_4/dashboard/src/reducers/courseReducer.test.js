// courseReducer.test.js
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

// Test suite
describe('courseReducer', () => {
  // Test 1: Verify the default state has the correct structure
  it('should have the correct structure for the default state', () => {
    const newState = courseReducer(undefined, {});
    const expectedState = fromJS({
      courses: {},
    });

    expect(newState).toEqual(expectedState);
  });

  // Test 2: Verify FETCH_COURSE_SUCCESS updates state with data and isSelected set to false
  it('should update state with data on FETCH_COURSE_SUCCESS', () => {
    const coursesData = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data: coursesData };
    const newState = courseReducer(undefined, action);

    expect(newState.getIn(['courses']).toJS()).toEqual(
      coursesData.reduce((acc, course) => {
        acc[course.id] = { ...course, isSelected: false };
        return acc;
      }, {})
    );
  });

  // Test 3: Verify SELECT_COURSE updates isSelected for the correct course
  it('should update isSelected to true on SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        '1': { id: 1, isSelected: false, name: 'ES6', credit: 60 },
        '2': { id: 2, isSelected: false, name: 'Webpack', credit: 20 },
        '3': { id: 3, isSelected: false, name: 'React', credit: 40 },
      },
    });

    const action = { type: SELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);

    expect(newState.getIn(['courses', '2', 'isSelected'])).toBe(true);
  });

  // Test 4: Verify UNSELECT_COURSE updates isSelected for the correct course
  it('should update isSelected to false on UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        '1': { id: 1, isSelected: true, name: 'ES6', credit: 60 },
        '2': { id: 2, isSelected: true, name: 'Webpack', credit: 20 },
        '3': { id: 3, isSelected: true, name: 'React', credit: 40 },
      },
    });

    const action = { type: UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);

    expect(newState.getIn(['courses', '2', 'isSelected'])).toBe(false);
  });
});
