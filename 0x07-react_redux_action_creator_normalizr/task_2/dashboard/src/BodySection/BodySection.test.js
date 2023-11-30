import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection", () => {
  it("renders h2 and children correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // check for h2 element
    expect(wrapper.find("h2").text()).toEqual("test title");

    // check for children node
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
