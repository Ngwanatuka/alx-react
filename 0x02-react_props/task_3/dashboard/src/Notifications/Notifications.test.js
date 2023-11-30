import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe(text);
  });

  describe('NotificationItem elements', () => {
    it('renders three NotificationItem elements', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('verifies the first NotificationItem renders the correct HTML', () => {
      const wrapper = shallow(<Notifications />);
      const firstNotificationItem = wrapper.find(NotificationItem).first();
      expect(firstNotificationItem.prop('type')).toBe('default');
      expect(firstNotificationItem.prop('value')).toBe('New course available');
      expect(firstNotificationItem.prop('html')).toBeUndefined();
    });
  });
});