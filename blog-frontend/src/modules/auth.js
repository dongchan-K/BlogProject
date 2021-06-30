import { createAction, handleActions } from 'redux-actions';

const TEST_ACTION = 'auth/TEST_ACTION';

export const testAction = createAction(TEST_ACTION);

const initialState = {};

const auth = handleActions(
  {
    [TEST_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
