import * as notificationData from '../../notification.json';

// Function to get all notifications
export function getAllNotificationsByUser(userId){
      // Filtering notifications based on author id matching the provided userId
    return notificationData.default.filter((notification => notification.author.id === userId));
}