import * as notificationData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    return notificationData.filter(notification => notification.authore === userId);
}