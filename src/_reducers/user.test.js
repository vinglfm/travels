import user from './user';

describe('User reducer', () => {
  let action = {user: {name: 'user'}};

  it('SIGN_IN set up user as state', () => {
    action.type = 'SIGN_IN';
    const state = user({}, action);
    expect(state).toEqual(action.user);
  });

  it('SIGN_UP set up user as state', () => {
    action.type = 'SIGN_UP';
    const state = user({}, action);
    expect(state).toEqual(action.user);
  });

  it('SIGN_OUT remove user from state', () => {
    action.type = 'SIGN_OUT';
    const state = user(action.user, action);
    expect(state).toEqual({});
  });
});