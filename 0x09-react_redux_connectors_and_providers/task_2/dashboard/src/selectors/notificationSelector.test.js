import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map, Immutable } from 'immutable';

// Test suite
describe('Notification Selectors', () => {
  // Mock state for testing selectors
  const mockState = {
    notificationReducer: Map({
      filter: 'DEFAULT',
      notifications: Map({
        entities: {
          '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
          '2': { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        },
        result: ['1', '2', '3'],
      }),
    }),
  };

  // Test 1: filterTypeSelected
  it('filterTypeSelected should return the correct filter value', () => {
    const result = filterTypeSelected(mockState);
    expect(result).toBe('DEFAULT');
  });

  // Test 2: getNotifications
  it('getUnreadNotifications should return a list of unread message entities', () => {
    const result = getUnreadNotifications(mockState);
    const expected = Immutable.fromJS({
      '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
      '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });
  
    expect(result).toEqual(expected);
  });

  // Test 3: getUnreadNotifications
  it('getUnreadNotifications should return a list of unread message entities', () => {
    const result = getUnreadNotifications(mockState);
    const expected = Map({
      '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
      '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(result).toEqual(expected);
  });
});