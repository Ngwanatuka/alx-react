import courseReducer from './reducers/courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state as an empty Map', () => {
    const initialState = new Map();
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the data passed with FETCH_COURSE_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data };
    expect(courseReducer(undefined, action).toJS()).toEqual(data);
  });

  it('should update the selected course with SELECT_COURSE action', () => {
    const initialState = new Map([
      [1, { id: 1, name: "ES6", credit: 60, isSelected: false }],
      [2, { id: 2, name: "Webpack", credit: 20, isSelected: false }],
      [3, { id: 3, name: "React", credit: 40, isSelected: false }]
    ]);
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = new Map([
      [1, { id: 1, name: "ES6", credit: 60, isSelected: false }],
      [2, { id: 2, name: "Webpack", credit: 20, isSelected: true }],
      [3, { id: 3, name: "React", credit: 40, isSelected: false }]
    ]);
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should update the unselected course with UNSELECT_COURSE action', () => {
    const initialState = new Map([
      [1, { id: 1, name: "ES6", credit: 60, isSelected: false }],
      [2, { id: 2, name: "Webpack", credit: 20, isSelected: true }],
      [3, { id: 3, name: "React", credit: 40, isSelected: false }]
    ]);
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = new Map([
      [1, { id: 1, name: "ES6", credit: 60, isSelected: false }],
      [2, { id: 2, name: "Webpack", credit: 20, isSelected: false }],
      [3, { id: 3, name: "React", credit: 40, isSelected: false }]
    ]);
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});
