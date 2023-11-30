import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

const mountComponentAndAssertLogging = (Component, componentName) => {
  const consoleLogSpy = jest.spyOn(console, "log");

  const WrappedComponent = WithLogging(Component);
  const wrapper = mount(<WrappedComponent />);
  
  expect(consoleLogSpy).toHaveBeenCalledWith(`${componentName} is mounted`);

  wrapper.unmount();

  expect(consoleLogSpy).toHaveBeenCalledWith(`${componentName} is going to unmount`);

  consoleLogSpy.mockRestore();
};

describe("WithLogging HOC", () => {
  it("should log when the component is mounted", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    const Component = () => <p />;
    const WrappedComponent = WithLogging(Component);

    mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Component is mounted");

    consoleLogSpy.mockRestore();
  });
});

