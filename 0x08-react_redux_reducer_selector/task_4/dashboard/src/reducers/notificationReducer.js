import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
  filter: "DEFAULT",
  notifications: Map(),
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge(normalizedData.entities.notifications);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case MARK_AS_READ:
      return state.setIn(["notifications", action.index, "isRead"], true);
    default:
      return state;
  }
}
