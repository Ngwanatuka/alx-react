import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

// Test for markAsRead action creator
test('markAsRead action creator returns the correct action', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    payload: { index },
  };

  const action = markAsRead(index);

  expect(action).toEqual(expectedAction);
});

// Test for setNotificationFilter action creator
test('setNotificationFilter action creator returns the correct action', () => {
  const filter = NotificationTypeFilters.DEFAULT;
  const expectedAction = {
    type: SET_TYPE_FILTER,
    payload: { filter },
  };

  const action = setNotificationFilter(filter);

  expect(action).toEqual(expectedAction);
});
