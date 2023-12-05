import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import configureStore from "redux-mock-store";
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActionCreators";

const mockStore = configureStore();

describe("App", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      ui: {
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
      },
    });

    wrapper = shallow(<App store={store} />).dive(); // Dive into the connected component
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a div with the class App-header", () => {
    const headerDiv = wrapper.find(".App-header");
    expect(headerDiv.exists()).toBe(true);
  });

  it("renders a div with a class of App-body", () => {
    const bodyDiv = wrapper.find(".App-body");
    expect(bodyDiv.exists()).toBe(true);
  });

  it("renders a div with a class of App-footer", () => {
    const footerDiv = wrapper.find(".App-footer");
    expect(footerDiv.exists()).toBe(true);
  });

  it("contains the Notification component", () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("contains the Header component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("contains the Login component", () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it("contains the Footer component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("does not display the CourseList component", () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it("displays the Login component when isLoggedIn is false", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not display the Login component", () => {
      store = mockStore({
        ui: {
          isLoggedIn: true,
          isNotificationDrawerVisible: false,
        },
      });
      wrapper = shallow(<App store={store} />).dive();

      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("displays the CourseList component", () => {
      store = mockStore({
        ui: {
          isLoggedIn: true,
          isNotificationDrawerVisible: false,
        },
      });
      wrapper = shallow(<App store={store} />).dive();

      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it("should have default state for displayDrawer as false", () => {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should update user state after calling logIn function", () => {
    const email = "test@example.com";
    const password = "password123";
    wrapper.instance().logIn(email, password);
    expect(wrapper.state("user")).toEqual({
      email: "test@example.com",
      password: "password123",
      isLoggedIn: true,
    });
  });

  it("should update user state after calling logOut function", () => {
    wrapper.instance().logOut();
    expect(wrapper.state("user")).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });

  it("should mark notification as read", () => {
    // Mock list of notifications
    const mockNotifications = [
      { id: 1, message: "Notification 1" },
      { id: 2, message: "Notification 2" },
      { id: 3, message: "Notification 3" },
    ];

    // Set the state with mock notifications
    wrapper.setState({ listNotifications: mockNotifications });

    // Call markNotificationAsRead with the id of the notification to mark as read
    wrapper.instance().markNotificationAsRead(2);

    // Verify that the state has been updated correctly
    expect(wrapper.state("listNotifications")).toEqual([
      { id: 1, message: "Notification 1" },
      { id: 3, message: "Notification 3" },
    ]);
  });

  describe("mapStateToProps", () => {
    it("returns the right object when passing the state", () => {
      // Mock state using Immutable Map
      const state = fromJS({
        ui: {
          isLoggedIn: true,
          isNotificationDrawerVisible: true,
        },
        
      });

      // Call mapStateToProps with the mock state
      const props = mapStateToProps(state);

      // Verify that the function returns the correct object
      expect(props).toEqual({
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
      });
    });
  });

  // Additional tests for mapDispatchToProps
  it("maps displayNotificationDrawer action to props", () => {
    const dispatchMock = jest.fn();
    const mappedProps = mapDispatchToProps(dispatchMock);
    mappedProps.displayNotificationDrawer();
    expect(dispatchMock).toHaveBeenCalledWith(displayNotificationDrawer());
  });

  it("maps hideNotificationDrawer action to props", () => {
    const dispatchMock = jest.fn();
    const mappedProps = mapDispatchToProps(dispatchMock);
    mappedProps.hideNotificationDrawer();
    expect(dispatchMock).toHaveBeenCalledWith(hideNotificationDrawer());
  });
});
