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
    const wrapper = shallow(<App isLoggedIn={true} />);
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
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("displays the Login component when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not display the Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("displays the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
});
