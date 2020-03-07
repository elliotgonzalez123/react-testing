import moxios from 'moxios';
import { testStore } from '../../utils/index';
import { getPosts } from '../actions/index';

describe('getPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly', () => {
    const expectedState = [
      { title: 'test', body: 'test' },
      { title: 'test', body: 'test' },
      { title: 'test', body: 'test' }
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(getPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
