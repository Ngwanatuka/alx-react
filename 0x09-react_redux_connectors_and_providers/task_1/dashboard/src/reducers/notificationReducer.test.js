// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { Map, fromJS } from 'immutable';

// Test suite
describe('notificationReducer', () => {
  // Test 1: Verify the default state has the correct structure
  it('should have the correct structure for the default state', () => {
    const newState = notificationReducer(undefined, {});
    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: Map(),
    });

    expect(newState).toEqual(expectedState);
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

    expect(newState.getIn(['notifications', 'entities']).toJS()).toEqual(
      notificationsData.reduce((acc, notification) => {
        acc[notification.id] = { ...notification, isRead: false };
        return acc;
      }, {})
    );
  });

  // Test 3: Verify MARK_AS_READ updates isRead for the correct notification
  it('should update isRead to true on MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        entities: {
          '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
          '2': { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        },
        result: ['1', '2', '3'],
      }),
    });

    const action = { type: MARK_AS_READ, index: 2 };
    const newState = notificationReducer(initialState, action);

    expect(newState.getIn(['notifications', 'entities', '2', 'isRead'])).toBe(true);
  });

  // Test 4: Verify SET_TYPE_FILTER updates the filter attribute
  it('should update the filter attribute on SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map(),
    });

    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(initialState, action);

    expect(newState.get('filter')).toBe('URGENT');
  });
});
