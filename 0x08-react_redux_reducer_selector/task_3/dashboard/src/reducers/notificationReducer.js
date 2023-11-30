// notificationReducer.js
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

// Default state
const initialState = {
  filter: "DEFAULT",
  notifications: [],
};

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Update notifications and set isRead to false for each item
      const updatedNotifications = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications: updatedNotifications,
      };

    case MARK_AS_READ:
      // Update isRead for the marked notification
      const markedNotificationIndex = state.notifications.findIndex(
        (notification) => notification.id === action.index
      );

      if (markedNotificationIndex !== -1) {
        const updatedNotificationsRead = [...state.notifications];
        updatedNotificationsRead[markedNotificationIndex] = {
          ...updatedNotificationsRead[markedNotificationIndex],
          isRead: true,
        };

        return {
          ...state,
          notifications: updatedNotificationsRead,
        };
      }
      return state;

    case SET_TYPE_FILTER:
      // Update the filter attribute
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;
