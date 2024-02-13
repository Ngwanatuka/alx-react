import Header from "./Header";
import { shallow } from "enzyme";
import React from "react";

describe("Header component", () => {
    it("renders without crashing", () => {
        shallow(<Header />);
    });

    it("renders an img tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("img")).toHaveLength(1);
    });

    it("renders an h1 tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h1")).toHaveLength(1);
    });

    it("does not render logoutSection with default context value", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("#logoutSection")).toHaveLength(0);
    });

    it("renders logoutSection with user defined context value", () => {
        const user = {
            isLoggedIn: true,
            email: "test@example.com"
        };
        const wrapper = shallow(<Header user={user} />); // Pass props directly
        expect(wrapper.find("#logoutSection")).toHaveLength(1);
    });

    
});
