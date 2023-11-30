import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from './notificationActionTypes';

// Action creators for marking a notification as read
export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    payload: {
        index,
    },
});

// Action creators for setting the type filter
export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    payload: {
        filter,
    }
});
