import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    const headerDiv = wrapper.find(".App-header");
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

  it("displays the Login component when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not display the Login component", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ user: { isLoggedIn: true } });
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("displays the CourseList component", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ user: { isLoggedIn: true } });
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it("should have default state for displayDrawer as false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should update displayDrawer state to true after calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("should update displayDrawer state to false after calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("should update user state after calling logIn function", () => {
    const wrapper = shallow(<App />);
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
    const wrapper = shallow(<App />);
    wrapper.instance().logOut();
    expect(wrapper.state("user")).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });
});
