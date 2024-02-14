// Selector for retrieving the filter type selected
export const filterTypeSelected = (state) => state.notification.get("filter");

// Selector for retrieving all notifications
export const getNotifications = (state) =>
  state.notifications.get("notifications").toJS();

// Selector for retrieving the notifications that are unread
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get("notifications");
  return notifications.filter((notification) => !notification.get("isRead"));
};
