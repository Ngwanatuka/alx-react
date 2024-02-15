import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));

  fetch("/notifications.json")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setNotifications(data));
      dispatch(setLoadingState(false));
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
      dispatch(setLoadingState(false));
    });
};
