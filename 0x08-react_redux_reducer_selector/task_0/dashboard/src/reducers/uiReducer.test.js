// uiReducer.test.js
import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

// Test suite
describe('uiReducer', () => {
  // Test 1: Verify the state returned by uiReducer equals the initial state with no action
  it('should return the initial state with no action', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  // Test 2: Verify the state returned by uiReducer equals the initial state with SELECT_COURSE action
  it('should return the initial state with SELECT_COURSE action', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  // Test 3: Verify the state returned by uiReducer changes correctly with DISPLAY_NOTIFICATION_DRAWER action
  it('should update isNotificationDrawerVisible with DISPLAY_NOTIFICATION_DRAWER action', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);

    expect(newState.isNotificationDrawerVisible).toBe(true);
    // Make sure other properties remain unchanged
    expect(newState.isUserLoggedIn).toBe(false);
    expect(newState.user).toEqual({});
  });
});
