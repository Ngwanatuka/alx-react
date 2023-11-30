import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe ('CourseListRow component Test', () => {
    it('renders one cell with colspoan = 2 when textSecondCell does not exist and isHeader is true', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell='Header' />
        );

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    });

    it('renders two cells when textSecondCell exist and isHeader is true', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell='Header' textSecondCell='Header2' />
        );

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('renders two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={false} textFirstCell='Cell 1' textSecondCell='Cell 2' />
        );

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(2);
    });

    it('should render a row with background color #f5f5f5ab for non-header rows', () => {
        const wrapper = shallow(
          <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
        );
        const row = wrapper.find('tr');
    
        // Check if the background color style is applied correctly
        expect(row.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
      });
    
      it('should render a row with background color #deb5b545 for header rows', () => {
        const wrapper = shallow(
          <CourseListRow isHeader={true} textFirstCell="Header" />
        );
        const row = wrapper.find('tr');
    
        // Check if the background color style is applied correctly for header rows
        expect(row.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
      });
});