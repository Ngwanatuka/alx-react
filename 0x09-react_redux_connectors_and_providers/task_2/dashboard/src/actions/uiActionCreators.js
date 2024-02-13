import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

// Simulated API call
const loginApiEndpoint = "/login-success.json";

// Action creators for login success
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

// Action creators for login failure
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
    return async (dispatch) => {
      // Dispatch the login action with user email and password
      dispatch(login(email, password));
  
      try {
        // Fetch the API '/login-success.json'
        const response = await fetch(loginApiEndpoint);
  
        // Check if the response is successful
        if (response.ok) {
          // Dispatch loginSuccess action
          dispatch(loginSuccess());
        } else {
          // If the response is not successful, dispatch loginFailure action
          dispatch(loginFailure());
        }
      } catch (error) {
        // If there is an error, dispatch loginFailure action
        console.error('Error logging in:', error);
        dispatch(loginFailure());
      }
    };
  };

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const boundLogin = (email, password) => login(email, password);
export const boundLogout = () => logout();
export const boundDisplayNotificationDrawer = () => displayNotificationDrawer();
export const boundHideNotificationDrawer = () => hideNotificationDrawer();
