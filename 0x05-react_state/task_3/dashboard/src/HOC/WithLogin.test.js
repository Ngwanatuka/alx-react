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
  it("should log the message with 'Component' when the wrapped element is pure HTML", () => {
    mountComponentAndAssertLogging(() => <p />, "Component");
  });

  it("should log the message with the name of the component when the wrapped element is Login component", () => {
    const Login = () => <p>Login</p>;
    Login.displayName = "LoginComponent";

    mountComponentAndAssertLogging(Login, "LoginComponent");
  });
});
