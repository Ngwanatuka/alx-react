import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { AppContext } from "../App/AppContext";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });

  it("does not display the contact link when user is logged out", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a[href='/contact']").exists()).toBe(false);
  });

  it("displays the contact link when user is logged in", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a[href='/contact']").exists()).toBe(true);
  });
});
