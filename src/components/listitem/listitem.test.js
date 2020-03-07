import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './index';

configure({ adapter: new Adapter() });

describe('ListItem component', () => {
  describe('checking proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        title: '',
        desc: ''
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('component renders', () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        title: 'test',
        desc: 'test'
      };
      wrapper = shallow(<ListItem {...expectedProps} />);
    });
    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'list-item-component');
      expect(component.length).toBe(1);
    });
    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'component-title');
      expect(title.length).toBe(1);
    });
    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'component-desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        desc: 'test'
      };
      wrapper = shallow(<ListItem {...expectedProps} />);
    });
    it('component not be rendered', () => {
      const component = findByTestAttr(wrapper, 'list-item-component');
      expect(component.length).toBe(0);
    });
  });
});
