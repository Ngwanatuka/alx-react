import * as notificationData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  },
  { idAttribute: 'id' }
);

const notificationsSchema = [notification];

const normalizedData = normalize(notificationData, notificationsSchema);

export function getAllNotificationsByUser(userId) {
  const userNotifications = normalizedData.entities.notifications;
  const resultArray = normalizedData.result;

  return resultArray
    .map(notificationId => userNotifications[notificationId])
    .filter(notification => notification.author === userId);
}
