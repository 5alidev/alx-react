import uiReducer, { initState } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("uiReducer", () => {
  it("initial state returned when no action is passed to uiReducer", () => {
    const state = uiReducer(initState, "");
    expect(state.toJS()).toEqual(initState.toJS());
  });

  it("the state equals the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(initState, selectCourse());
    expect(state.toJS()).toEqual(initState.toJS());
  });

  it("isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed", () => {
    const state = uiReducer(initState, displayNotificationDrawer());
    expect(state.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});
