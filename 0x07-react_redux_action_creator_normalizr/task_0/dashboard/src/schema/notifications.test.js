import { getAllNotificationsByUser } from './notifications';

// Test case
describe('getAllNotificationsByUser', () => {
  it('returns correct data for a given user ID', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedData = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
        isRead: true,
        type: 'urgent',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      }
    ];

    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual(expectedData);
  });
});

