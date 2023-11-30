// uiReducer.js
import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

// Initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map(),
};

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case actionTypes.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
};

export default uiReducer;
