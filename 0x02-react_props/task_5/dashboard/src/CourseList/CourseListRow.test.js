import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('Course list Row Component test', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow textFirstCell='test' />);
        expect(wrapper.exists()).toBe(true); 
    });

    it ('should render one cell with colspan 2 when textsecondcell id null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />)
        expect(wrapper.find("tr").children()).toHaveLength(1);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2>tests<?th>');

    });

    it ('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
        expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");

    })
})