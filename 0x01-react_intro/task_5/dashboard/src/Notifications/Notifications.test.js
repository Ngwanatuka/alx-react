import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications", () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications /> );
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a three list items', () => {
        const wrapper= shallow(<Notifications />);
        const listItems = wrapper.find('li');
        expect(listItems).toHaveLength(3);
    });

    it('renders a text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.text();
        expect(text).toContain('Here is the list of notifications');
    });
});