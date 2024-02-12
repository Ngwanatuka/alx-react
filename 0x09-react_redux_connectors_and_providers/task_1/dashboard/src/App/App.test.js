import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { fromJS } from "immutable";
import { mapStateToProps } from "react-redux";

describe("maStateToProps", () => {
  it("returns the right object when passing state", () => {
    // state using fromJS from Immutable
    let state = fromJS({
      isLoggedIn: true,
    });

    // call mapStateToProps with the state
    const props = mapStateToProps(state);

    // verify that it returns the correct object
    expect(props).toEqual({
      isLoggedIn: true,
    });
  });
});

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    const headerDiv = wrapper.find(".App");
    expect(headerDiv.exists()).toBe(true);
  });

  it("renders a div with a class of App-body", () => {
    const wrapper = shallow(<App />);
    const bodyDiv = wrapper.find(".App-body");
    expect(bodyDiv.exists()).toBe(true);
  });

  it("renders a div with a class of App-footer", () => {
    const wrapper = shallow(<App />);
    const footerDiv = wrapper.find(".App-footer");
    expect(footerDiv.exists()).toBe(true);
  });

  it("contains the Notification component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("does not display the CourseList component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it("displays the Login component when isLoggedIn state is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe("when isLoggedIn state is true", () => {
    it("does not display the Login component", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ isLoggedIn: true });
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("displays the CourseList component", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ isLoggedIn: true });
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it("has default state displayDrawer set to false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("updates state to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("updates state to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("updates state to true after calling logIn function", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn();
    expect(wrapper.state("isLoggedIn")).toBe(true);
  });

  it("updates state to false after calling logOut function", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoggedIn: true });
    wrapper.instance().logOut();
    expect(wrapper.state("isLoggedIn")).toBe(false);
  });

  it("calls logOut function when logout link is clicked", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoggedIn: true });
    wrapper.instance().handleLogout();
    expect(wrapper.state("isLoggedIn")).toBe(false);
  });

  it("updates listNotifications correctly when markNotificationAsRead is called", () => {
    // Mock list of notifications
    const mockNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
      { id: 3, type: "default", value: "Notification 3" },
    ];

    // Create a shallow-rendered instance of the App component
    const wrapper = shallow(<App />);

    // Set the mock list of notifications in the component state
    wrapper.setState({ listNotifications: mockNotifications });

    // Call markNotificationAsRead function with a notification ID
    wrapper.instance().markNotificationAsRead(2);

    // Verify that the state is updated correctly
    expect(wrapper.state("listNotifications")).toEqual([
      { id: 1, type: "default", value: "Notification 1" },
      { id: 3, type: "default", value: "Notification 3" },
    ]);
  });
});
