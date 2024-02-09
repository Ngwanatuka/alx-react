import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  SELECT_COURSE,
} from "./actions/uiActionTypes";
import { Map } from "immutable";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = { type: SELECT_COURSE };
    expect(uiReducer(initialState, action)).toEqual(initialState);
  });

  it("should correctly update isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
