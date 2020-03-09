import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from './index';

configure({ adapter: new Adapter() });

describe('<Test /> with no props', () => {
  const container = shallow(<Test />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a button', () => {
    expect(container.find('#btn-1').length).toEqual(1);
  });
  it('should render submit button', () => {
    expect(container.find('#btn-2').length).toEqual(1);
  });
  it('should have proper props for button', () => {
    expect(container.find('#btn-1').props()).toEqual({
      id: 'btn-1',
      className: 'test-btn',
      onClick: expect.any(Function),
      children: 'test button'
    });
  });
});

describe('<Test /> with props', () => {
  const initialProps = {
    onTestClick: jest.fn()
  };
  const container = shallow(<Test {...initialProps} />);

  describe('Button click events', () => {
    container.find('#btn-1').simulate('click');
    it('should change button text on click', () => {
      expect(container.find('#btn-1').prop('children')).toBe('tested button');
    });

    it('should change button classname on click', () => {
      expect(container.find('#btn-1').prop('className')).toBe('tested-btn');
    });
    it('should call function on click', () => {
      expect(initialProps.onTestClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('text area field', () => {
    it('should render textarea', () => {
      expect(container.find('textarea').length).toEqual(1);
    });
    it('should render correct text on chnage', () => {
      container.find('textarea').simulate('change', {
        target: { value: 'test comment' }
      });
      container.update();
      expect(container.find('textarea').prop('value')).toBe('test comment');
    });

    it('should empty textarea upon submit', () => {
      container.find('textarea').simulate('change', {
        target: { value: 'test comment' }
      });
      container.update();
      container.find('form').simulate('submit', { preventDefault: jest.fn() });
      container.update();
      expect(container.find('textarea').prop('value')).toBe('');
    });
  });
});
