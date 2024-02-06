import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

  it('renders that text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains("Copyright"));
  });
});
