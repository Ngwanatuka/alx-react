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
  const notifications = entities.notifications;
  const users = entities.users;
  const messages = entities.messages;

  const notificationsByUser = Object.values(notifications).filter(
    (notification) => notification.author === userId
  );

  return notificationsByUser.map(
    (notification) => messages[notification.context]
  );
}
