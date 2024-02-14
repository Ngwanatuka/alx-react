import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('Root Reducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});
    const expectedInitialState = {
      course: Map({}),
      notification: Map({
        filter: "DEFAULT",
        notifications: Map({}),
      }),
      ui: Map({
        isNotificationDrawerVisible: false,
        isLoggedIn: false,
        user: null,
      }),
    };

    expect(initialState).toEqual(expectedInitialState);
  });
});
