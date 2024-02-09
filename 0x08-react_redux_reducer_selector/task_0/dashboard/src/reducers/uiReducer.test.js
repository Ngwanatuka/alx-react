import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  SELECT_COURSE,
} from "./actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: SELECT_COURSE };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it("should correctly update isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
