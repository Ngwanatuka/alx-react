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

import fetch from "node-fetch";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { loginRequest } from "./uiActionCreators";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe("loginRequest", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches LOGIN_SUCCESS action on successful login", () => {
    fetchMock.getOnce("/login-success.json", {
      body: {
        first_name: "Johann",
        last_name: "Salva",
        email: "johann.salva@holberton.nz",
        profile_picture: "http://placehold.it/32x32",
      },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      {
        type: "LOGIN",
        user: { email: "email@example.com", password: "password" },
      },
      { type: "LOGIN_SUCCESS" },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("email@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("dispatches LOGIN_FAILURE action on failed login", () => {
    fetchMock.getOnce("/login-success.json", 401);

    const expectedActions = [
      {
        type: "LOGIN",
        user: { email: "email@example.com", password: "password" },
      },
      { type: "LOGIN_FAILURE" },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("email@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
