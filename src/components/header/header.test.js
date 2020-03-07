import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from './index';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../utils/index';

configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logo-img');
    expect(logo.length).toBe(1);
  });
});
