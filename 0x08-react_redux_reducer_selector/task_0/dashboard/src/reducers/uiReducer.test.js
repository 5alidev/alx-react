import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseACtionTypes";

describe("uiReducer", () => {
  const initState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("equals the initial state when no action is passed", () => {
    expect(uiReducer(initState, "null")).toEqual(initState);
  });

  it("equals the initial state when the action SELECT_COURSE is passed", () => {
    expect(uiReducer(initState, { type: SELECT_COURSE })).toEqual(initState);
  });

  it("when the action DISPLAY_NOTIFICATION_DRAWER is passed, the isNotificationDrawerVisible property changes correctly", () => {
    expect(uiReducer(initState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(
      { ...initState, isNotificationDrawerVisible: true }
    );
  });
});
