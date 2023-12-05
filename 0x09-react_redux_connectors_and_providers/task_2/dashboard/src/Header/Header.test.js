import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

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

  it("does not render logoutSection with default props", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("renders logoutSection with user defined props", () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: "test@example.com" }} />);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("calls logOut function when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: "test@example.com" }} logOut={logOutMock} />);
    const logoutLink = wrapper.find("span");
    logoutLink.simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});
