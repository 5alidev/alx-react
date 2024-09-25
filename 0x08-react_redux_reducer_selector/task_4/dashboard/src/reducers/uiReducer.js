import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

import { Map } from "immutable";

export const initState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

const uiReducer = (currentState = initState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return initState.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return initState.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return initState.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return initState.set("isUserLoggedIn", false);
    case LOGOUT:
      return initState.set("isUserLoggedIn", false);
    default:
      return currentState;
  }
};

export default uiReducer;
