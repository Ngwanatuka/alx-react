// uiReducer.test.js
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

// Test suite
describe('uiReducer', () => {
  // Test 1: Verify the state returned by uiReducer equals the initial state with no action
  it('should return the initial state with no action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const newState = uiReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  // Test 2: Verify the state returned by uiReducer equals the initial state with SELECT_COURSE action
  it('should return the initial state with SELECT_COURSE action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  // Test 3: Verify the state returned by uiReducer changes correctly with DISPLAY_NOTIFICATION_DRAWER action
  it('should update isNotificationDrawerVisible with DISPLAY_NOTIFICATION_DRAWER action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);

    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
    // Make sure other properties remain unchanged
    expect(newState.get('isUserLoggedIn')).toBe(false);
    expect(newState.get('user')).toEqual(Map());
  });
});
