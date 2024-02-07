import * as notificationsData from "../../notification.json";

// Extract the notifications array
const notificationsArray = notificationsData.default;

// Create the function
export function getAllNotificationsByUser(userId) {
  return notificationsArray
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

