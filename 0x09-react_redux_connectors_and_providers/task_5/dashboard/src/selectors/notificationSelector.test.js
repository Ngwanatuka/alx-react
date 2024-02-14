import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = Map({
    filter: 'DEFAULT',
    notifications: Map({
      1: { id: 1, isRead: false, type: "default", value: "New course available" },
      2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
    })
  });

  it('should return the filter type selected', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('DEFAULT');
  });

  it('should return a list of notifications in Map format', () => {
    const notifications = getNotifications(initialState);
    expect(notifications).toEqual(Map({
      1: { id: 1, isRead: false, type: "default", value: "New course available" },
      2: { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
    }));
  });

  it('should return a list of unread notifications in Map format', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications).toEqual(Map({
      1: { id: 1, isRead: false, type: "default", value: "New course available" },
      3: { id: 3, isRead: false, type: "urgent", value: "New data available" }
    }));
  });
});