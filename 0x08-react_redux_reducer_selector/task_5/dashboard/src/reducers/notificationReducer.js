// notificationReducer.js
import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state
const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data and merge it with the state
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(fromJS(normalizedData));

    case SET_TYPE_FILTER:
      // Update the value of the state using set
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      // Update the value of the item using setIn
      return state.setIn(['notifications', action.index, 'isRead'], true);

    default:
      return state;
  }
};

export default notificationReducer;
