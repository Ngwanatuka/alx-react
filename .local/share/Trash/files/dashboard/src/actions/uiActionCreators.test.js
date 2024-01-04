import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetch from 'node-fetch'; // Import node-fetch for API requests
import { loginRequest, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful API response', () => {
    const store = mockStore({});
    const email = 'test@example.com';
    const password = 'testpassword';

    // Mock the successful API response
    fetchMock.getOnce('/login-success.json', { status: 200 });

    // Use node-fetch to simulate API response
    fetchMock.config.fetch = fetch;

    // Dispatch the loginRequest action
    return store.dispatch(loginRequest(email, password)).then(() => {
      // Get the dispatched actions
      const actions = store.getActions();

      // Expected actions
      const expectedActions = [
        { type: LOGIN, payload: { user: { email, password } } },
        { type: LOGIN_SUCCESS },
      ];

      // Verify that the expected actions are dispatched
      expect(actions).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed API response', () => {
    const store = mockStore({});
    const email = 'test@example.com';
    const password = 'testpassword';

    // Mock the failed API response
    fetchMock.getOnce('/login-success.json', { status: 500 });

    // Use node-fetch to simulate API response
    fetchMock.config.fetch = fetch;

    // Dispatch the loginRequest action
    return store.dispatch(loginRequest(email, password)).then(() => {
      // Get the dispatched actions
      const actions = store.getActions();

      // Expected actions
      const expectedActions = [
        { type: LOGIN, payload: { user: { email, password } } },
        { type: LOGIN_FAILURE },
      ];

      // Verify that the expected actions are dispatched
      expect(actions).toEqual(expectedActions);
    });
  });
});
