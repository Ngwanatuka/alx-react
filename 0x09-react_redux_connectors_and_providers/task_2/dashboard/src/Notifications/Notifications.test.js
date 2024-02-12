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
      const wrapper = shallow(<Notifications listNotifications={[{ id: 1 }, { id: 2 }, { id: 3 }]} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it("verifies the first NotificationItem renders the correct props", () => {
      const wrapper = shallow(<Notifications listNotifications={[{ id: 1, type: "default", value: "New course available" }]} />);
      const firstNotificationItem = wrapper.find(NotificationItem).first();
      expect(firstNotificationItem.prop("type")).toBe("default");
      expect(firstNotificationItem.prop("value")).toBe("New course available");
      expect(firstNotificationItem.prop("html")).toBeUndefined();
    });
  });

  it("displays the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("displays #root-notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("#root-notifications").prop("style")).toHaveProperty(
      "display",
      "block"
    );
  });

  it("checks if markNotificationAsRead is called with the correct ID", () => {
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={[{ id: 1 }, { id: 2 }, { id: 3 }]} markNotificationAsRead={markNotificationAsRead} />);
    
    // Simulate click on NotificationItem
    wrapper.find(NotificationItem).first().simulate("click");

    // Check if markNotificationAsRead was called with the correct ID
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
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
