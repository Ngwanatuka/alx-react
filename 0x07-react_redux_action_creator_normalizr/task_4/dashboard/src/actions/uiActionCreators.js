import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

// Action creators for login
export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});

// Action creators for logout
export const logout = () => ({
  type: LOGOUT,
});

// Action creators for displaying notification drawer
export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

// Action creators for hiding notification drawer
export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});