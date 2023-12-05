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

// Async action creator for login request
export const loginRequest = (email, password) => (dispatch) => {
  // Dispatch the login action
  dispatch(boundLogin(email, password));

  // Fetch the API /login-success.json
  fetch(loginApiEndpoint)
      .then((response) => {
          if (!response.ok) {
              throw new Error('Login failed');
          }
          // If successful, dispatch loginSuccess
          dispatch(loginSuccess());
      })
      .catch((error) => {
          // If API fails, dispatch loginFailure
          console.error('Login error:', error);
          dispatch(loginFailure());
      });
};

// Action creators for login
export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    user: {
      email,
      password,
    },
  }
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

// Create bound action creators
export const boundLogin = (email, password) => login(email, password);
export const boundLogout = () => logout();
export const boundDisplayNotificationDrawer = () => displayNotificationDrawer();
export const boundHideNotificationDrawer = () => hideNotificationDrawer();
