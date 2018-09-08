import userService from './userService';

describe('UserService', () => {
  const password = 'password';
  const email = 'email';
  const firstName = 'firstName';
  const lastName = 'lastName';
  const token = 'token';

  describe('Basic auth', () => {
    const json = {'data': 'response'};

    beforeEach(() => {
      const fetchResponse = {text: () => Promise.resolve(JSON.stringify(json)), ok: true};
      fetch = jest.fn(() => new Promise((resolve) => resolve(fetchResponse)));
      fetch.pathParam = () => fetch.mock.calls[0][0];
      fetch.body = () => fetch.mock.calls[0][1];
    });

    it('signIn', async () => {
      const response = await userService.signIn(email, password);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/signIn');
      // expect(fetch).toBeCalledWith('http://localhost:4000/users/authenticate/signIn', {'body': '{\"email\":\"email\",\"password\":\"password\"}', 'headers': {'Content-Type': 'application/json'}, 'method': 'POST'});
      const requestBody = fetch.body();
      expect(requestBody.body).toEqual(email);
      expect(requestBody.body).toEqual(password);
      expect(response).toEqual(json);
    });

    it('signUp', async () => {
      const response = await userService.signUp(email, password, firstName, lastName);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/signUp');
      // expect(fetch).toBeCalledWith('http://localhost:4000/users/authenticate/signUp', 
      //   {'body': '{\"email\":\"email\",\"password\":\"password\",\"firstName\":\"firstName\",\"lastName\":\"lastName\"}', 'headers': {'Content-Type': 'application/json'}, 'method': 'POST'});
      expect(response).toEqual(json);
    });
  });

  describe('Facebook', () => {
    const user = 'user';

    beforeEach(() => {
      const response = {headers: {get() {return 'token';}}, body: {}, json() {return Promise.resolve(user);}};
      fetch = jest.fn(() => new Promise((resolve) => resolve(response)));
      fetch.pathParam = () => fetch.mock.calls[0][0];
    });

    it('SignIn', async () => {  
      const response = await userService.fbSignIn(token);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/facebook');
      // '{"body": {Symbol(impl): {"_buffer": {"data": [123, 10, 32, 32, 34, 97, 99, 99, 101, 115, 115, 95, 116, 111, 107, 101, 110, 34, 58, 32, 34, 49, 34, 10, 125], "type": "Buffer"}, "isClosed": false, "type":"application/json", Symbol(wrapper): [Circular]}}, "cache": "default", "method": "POST", "mode": "cors"}');
      expect(response).toEqual(user);
    });  
  });

  it('signOut', () => {
  });
});