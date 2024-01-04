
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  test("Login component should enable submit button after changing input values", () => {
    const wrapper = shallow(<Login />);
  
    // Change email input value
    const emailInput = wrapper.find("input[name='email']");
    emailInput.simulate("change", { target: { value: "user@example.com" } });
  
    // Change password input value
    const passwordInput = wrapper.find("input[name='password']");
    passwordInput.simulate("change", { target: { value: "password123" } });
  
    // Find submit button and check if it's disabled
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.props().disabled).toBeFalsy(); // Verify submit button is enabled
  });
});
