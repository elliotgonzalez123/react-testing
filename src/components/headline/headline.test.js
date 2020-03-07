import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from '../../../utils/index';
import Headline from './index';

configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'test header',
        desc: 'test desc'
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setup(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headline-component');
      expect(component.length).toBe(1);
    });

    it('should render a H1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'header-component');
      expect(component.length).toBe(0);
    });
  });
});
