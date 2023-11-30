import * as notificationData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('message', {}, { idAttribute: 'guid' });

const notification = new schema.Entity(
    'notifications',
    {
        author: user,
        context: message
    },
    { idAttribute: 'guid'}
);

const notificationsSchema = [notification]

export function getAllNotificationsByUser(userId) {
    const filteredNotitifications = notificationData.filter(notification => notification.author,author === userId);
    return normalize(filteredNotitifications, notificationsSchema)
}
