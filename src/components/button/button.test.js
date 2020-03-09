import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SharedButton from './index';

configure({ adapter: new Adapter() });

describe('SahredButton component', () => {
  describe('checking proptypes', () => {
    it('not throw warning', () => {
      const expectedProps = {
        buttonText: 'test',
        emitEvent: () => {}
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('renders button', () => {
    let wrapper;
    let mockFunction;
    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        buttonText: 'test',
        emitEvent: mockFunction
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'button-component');
      expect(button.length).toBe(1);
    });

    it('should emit callback on click', () => {
      const button = findByTestAttr(wrapper, 'button-component');
      button.simulate('click');
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
