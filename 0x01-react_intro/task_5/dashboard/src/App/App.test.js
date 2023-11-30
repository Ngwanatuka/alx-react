import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        const headerDiv = wrapper.find('.App-header');
        expect(headerDiv.exists()).toBe(true);
    });

    it('renders a div with a class of App-body', () => {
        const wrapper = shallow(<App />);
        const bodyDiv = wrapper.find('.App-body');
        expect(bodyDiv.exists()).toBe(true);
    });

    it('renders a div with a class of App-footer', () => {
        const wrapper = shallow(<App />);
        const footerDiv = wrapper.find('.App-footer');
        expect(footerDiv.exists()).toBe(true);
    });
});