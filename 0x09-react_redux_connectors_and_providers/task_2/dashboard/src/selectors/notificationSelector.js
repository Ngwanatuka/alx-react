import { createSelector } from 'reselect';

const getNotificationState = (state) => state.notificationReducer;

export const filterTypeSelected = createSelector(
  getNotificationState,
  (state) => state.get('filter')
);

export const getNotifications = createSelector(
  getNotificationState,
  (state) => state.get('notifications')
);

export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) =>
    notifications.filter((notification) => !notification.get('isRead'))
);
