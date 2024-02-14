import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

// Test for markAsRead action creator
test('markAsRead action creator', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    index
  };
  expect(markAsRead(index)).toEqual(expectedAction);
});

// Test for setNotificationFilter action creator
test('setNotificationFilter action creator', () => {
  const filter = 'DEFAULT';
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter
  };
  expect(setNotificationFilter(filter)).toEqual(expectedAction);
});
