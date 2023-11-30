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
      const courses = [
        { id: 1, name: "ES6", credit: 60, isHeader: false },
        { id: 2, name: "Webpack", credit: 20, isHeader: false },
        { id: 3, name: "React", credit: 40, isHeader: false },
      ];

      const wrapper = shallow(<CourseList listCourses={courses} />);
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
