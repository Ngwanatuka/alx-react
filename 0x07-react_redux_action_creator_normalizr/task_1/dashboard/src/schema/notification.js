import notificationsData from "../notification.json";

// Create the function
export function getAllNotificationsByUser(userId) {
  return notificationsData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
