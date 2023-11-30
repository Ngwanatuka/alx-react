import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe(text);
  });

  describe("NotificationItem elements", () => {
    it("renders three NotificationItem elements", () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it("verifies the first NotificationItem renders the correct HTML", () => {
      const wrapper = shallow(<Notifications />);
      const firstNotificationItem = wrapper.find(NotificationItem).first();
      expect(firstNotificationItem.prop("type")).toBe("default");
      expect(firstNotificationItem.prop("value")).toBe("New course available");
      expect(firstNotificationItem.prop("html")).toBeUndefined();
    });
  });


  it("checks if markNotificationAsRead is called with the correct ID on click", () => {
    const spyMarkNotificationAsRead = jest.fn(); // Creating a spy function

    const wrapper = shallow(<Notifications markNotificationAsRead={spyMarkNotificationAsRead} />);
    const notificationItem = wrapper.find(NotificationItem).first();

    // Simulate a click on the component
    notificationItem.props().markAsRead();

    // Check if the spy function was called with the right ID argument
    expect(spyMarkNotificationAsRead).toHaveBeenCalledWith(1);
  });
});