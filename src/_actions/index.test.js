import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

describe('Authentication actions', () => {
  
    it('signIn on valid response', () => {
        const user = {email: 'email', password: 'password'};
        window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"email": "email", "password": "password"}')));
        
        const store = mockStore({});

        store.dispatch(actions.signIn(user)).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);
            expect(expectedActions).toContainEqual({type: 'SIGN_IN', user});
        });      
    });

    it('signIn on failed response', () => {
      const user = {email: 'email', password: 'password'};
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(mockResponse(401, null, '{"error": "Not authorized"}')));
        
      const store = mockStore({});

      store.dispatch(actions.signIn(user)).then(() => {
        const error =           {
          _bodyInit: "{\"error\": \"Not authorized\"}",
          _bodyText: "{\"error\": \"Not authorized\"}",
          headers: {"map": {"content-type": "application/json"}},
          ok: false, 
          status: 401, 
          statusText: null, 
          type: "default",
          url: ""
        };
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual({
            type: 'AUTH_ERROR', 
            error
          });
        });
    });
  });
  