import notificationReducer from './reducers/notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from './actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: []
    };
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: []
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: []
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
