import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toMatch(/Copyright/);
  });

  it("does not display the link when the user is logged out", () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find("a").exists()).toBe(false);
  });

  it("displays the link when the user is logged in", () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.find("a").exists()).toBe(true);
  });
});
