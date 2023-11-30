import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action creators
export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        payload: { index }
    };
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        payload: { filter }
    };
}

// Create bound action creators
export const boundMarkAsRead = (index) => markAsRead(index);
export const boundSetNotificationFilter = (filter) => setNotificationFilter(filter);
