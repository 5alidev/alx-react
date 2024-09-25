import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";

const defaultState = {
  notifications: [],
  filter: "",
};

const notificationReducer = (currentState = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...currentState,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    }
    case MARK_AS_READ: {
      return {
        ...currentState,
        notifications: currentState.notifications.map((notification) => {
          if (action.index === notification.id) {
            return { ...notification, isRead: true };
          }
          return { ...notification };
        }),
      };
    }
    case SET_TYPE_FILTER:
      {
        return {
          ...currentState,
          filter: action.filter,
        };
      }
      defaultState: {
        return currentState;
      }
  }
};

export default notificationReducer;
