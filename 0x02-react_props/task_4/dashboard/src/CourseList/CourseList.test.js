import React from 'react';
import CourseList from './CourseList';
import { shallow } from  'enzyme';
import CourseListRow from './CourseListRow';


describe('CourseList Component Test', () => {
    it('renders CourseList component without crashing', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders the 5 different rows', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
  });