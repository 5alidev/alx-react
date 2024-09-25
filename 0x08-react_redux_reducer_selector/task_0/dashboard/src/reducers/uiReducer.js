import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

const initState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (currentState = initState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...currentState, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...currentState, isNotificationDrawerVisible: false };
    case LOGIN_SUCCESS:
      return { ...currentState, isUserLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...currentState, isUserLoggedIn: false };
    case LOGOUT:
      return { ...currentState, isUserLoggedIn: false };
    default:
      return currentState;
  }
};

export default uiReducer;
