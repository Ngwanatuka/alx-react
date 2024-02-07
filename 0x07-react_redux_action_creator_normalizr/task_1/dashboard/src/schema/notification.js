import { schema } from "normalizr";
import notificationsData from "../notification.json";

// Define schema entities
const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data using the defined schema
const normalizedData = normalize(notificationsData, [notification]);

// Extract the normalized entities
const { entities } = normalizedData;

// Create the function
export function getAllNotificationsByUser(userId) {
  const result = [];

  // Loop through each notification
  Object.values(entities.notifications).forEach((notification) => {
    // Check if the given user ID is the author of the notification
    if (notification.author === userId) {
      // If yes, push the corresponding message to the result array
      result.push(entities.messages[notification.context]);
    }
  });

  return result;
}
