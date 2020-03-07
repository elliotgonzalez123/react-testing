import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import { testStore, findByTestAttr } from '../utils/index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'test', body: 'test' },
        { title: 'test', body: 'test' },
        { title: 'test', body: 'test' }
      ]
    };
    wrapper = setup(initialState);
  });
  it('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });
});
