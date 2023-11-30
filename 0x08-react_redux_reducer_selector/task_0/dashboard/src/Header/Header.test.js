import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import AppContext from "../App/AppContext";

describe("Header component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders an img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("renders an h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("does not render logoutSection with default context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("renders logoutSection with user defined context value", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("calls logOut function when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: "test@example.com" }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = wrapper.find("#logoutLink");
    logoutLink.simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});
