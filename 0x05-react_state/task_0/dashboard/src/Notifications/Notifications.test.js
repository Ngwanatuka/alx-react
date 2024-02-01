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

    it("verifies the first NotificationItem renders the correct props", () => {
      const wrapper = shallow(<Notifications />);
      const notificationItems = wrapper.find(NotificationItem);
      const firstNotificationItem = notificationItems.at(0);
      expect(firstNotificationItem.prop("type")).toBe("default");
      expect(firstNotificationItem.prop("value")).toBe("New course available");
      expect(firstNotificationItem.prop("html")).toBeUndefined();
    });
  });

  it("displays the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("does not display #root-notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("#root-notifications").prop("style")).toHaveProperty(
      "display",
      "none"
    );
  });

  it("displays the menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("displays #root-notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("#root-notifications").prop("style")).toHaveProperty(
      "display",
      "block"
    );
  });

  it("checks if markAsRead logs the correct message", () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance(); // Get the instance of the component

    // Mock console.log
    const consoleSpy = jest.spyOn(console, "log");

    // Call markAsRead with a sample ID
    instance.markAsRead(1);

    // Check if console.log was called with the right message
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );

    // Restore console.log
    consoleSpy.mockRestore();

    it("should not rerender with the same list", () => {
      const wrapper = shallow(<Notifications />);
      const shouldNotRerender = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      // Set initial list
      wrapper.setProps({
        listNotifications: [{ id: 1, value: "Notification 1" }],
      });

      // Set the same list again
      wrapper.setProps({
        listNotifications: [{ id: 1, value: "Notification 1" }],
      });

      expect(shouldNotRerender).not.toHaveBeenCalled();
      shouldNotRerender.mockRestore();
    });

    it("should rerender with a longer list", () => {
      const wrapper = shallow(<Notifications />);
      const shouldRerender = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );

      // Set initial list
      wrapper.setProps({
        listNotifications: [{ id: 1, value: "Notification 1" }],
      });

      // Set a longer list
      wrapper.setProps({
        listNotifications: [
          { id: 1, value: "Notification 1" },
          { id: 2, value: "Notification 2" },
        ],
      });

      expect(shouldRerender).toHaveBeenCalled();
      shouldRerender.mockRestore();
    });
  });

  describe("Notifications Component", () => {
    it("should call handleDisplayDrawer when menu item is clicked", () => {
      const handleDisplayDrawer = jest.fn();
      const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
  
      wrapper.find(".menuItem").simulate("click");
      expect(handleDisplayDrawer).toHaveBeenCalled();
    });
  
    it("should call handleHideDrawer when button is clicked", () => {
      const handleHideDrawer = jest.fn();
      const wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawer} />);
  
      wrapper.find("button").simulate("click");
      expect(handleHideDrawer).toHaveBeenCalled();
    });
  });
});
