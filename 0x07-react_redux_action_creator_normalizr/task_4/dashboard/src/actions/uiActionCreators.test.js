import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from "./uiActionCreators";
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from "./uiActionTypes";
  
  // Test for login action creator
  test("login action creator returns the correct action", () => {
    const email = "test@example.com";
    const password = "testpassword";
    const expectedAction = {
      type: LOGIN,
      payload: {
        user: { email, password },
      },
    };
  
    const action = login(email, password);
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for logout action creator
  test("logout action creator returns the correct action", () => {
    const expectedAction = {
      type: LOGOUT,
    };
  
    const action = logout();
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for displayNotificationDrawer action creator
  test("displayNotificationDrawer action creator returns the correct action", () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  
    const action = displayNotificationDrawer();
  
    expect(action).toEqual(expectedAction);
  });
  
  // Test for hideNotificationDrawer action creator
  test("hideNotificationDrawer action creator returns the correct action", () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  
    const action = hideNotificationDrawer();
  
    expect(action).toEqual(expectedAction);
  });