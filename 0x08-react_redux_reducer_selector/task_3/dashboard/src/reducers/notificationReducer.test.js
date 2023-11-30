// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

// Test suite
describe('notificationReducer', () => {
  // Test 1: Verify the default state has the correct structure
  it('should have the correct structure for the default state', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: [],
    });
  });

  // Test 2: Verify FETCH_NOTIFICATIONS_SUCCESS updates state with data and isRead set to false
  it('should update state with data on FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notificationsData = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notificationsData };
    const newState = notificationReducer(undefined, action);

    expect(newState.notifications).toEqual(
      notificationsData.map((notification) => ({ ...notification, isRead: false }))
    );
  });

  // Test 3: Verify MARK_AS_READ updates isRead for the correct notification
  it('should update isRead to true on MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };

    const action = { type: MARK_AS_READ, index: 2 };
    const newState = notificationReducer(initialState, action);

    expect(newState.notifications).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ]);
  });

  // Test 4: Verify SET_TYPE_FILTER updates the filter attribute
  it('should update the filter attribute on SET_TYPE_FILTER', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };

    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(initialState, action);

    expect(newState.filter).toBe('URGENT');
  });
});
