import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  SELECT_COURSE,
} from "./actions/uiActionTypes";
import { Map } from "immutable";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: SELECT_COURSE };
    expect(uiReducer(Map(initialState), action).toJS()).toEqual(initialState);
  });

  it("should correctly update isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(Map(initialState), action).toJS()).toEqual(expectedState);
  });
});
