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
      fetch.requestBody = () => fetch.mock.calls[0][1];
    });

    it('signIn', async () => {
      const response = await userService.signIn(email, password);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/signIn');
      const requestBody = fetch.requestBody();
      expect(requestBody.method).toEqual('POST');
      const body = JSON.parse(requestBody.body);
      expect(body.email).toEqual(email);
      expect(body.password).toEqual(password);
      expect(response).toEqual(json);
    });

    it('signUp', async () => {
      const response = await userService.signUp(email, password, firstName, lastName);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/signUp');
      const requestBody = fetch.requestBody();
      expect(requestBody.method).toEqual('POST');
      const body = JSON.parse(requestBody.body);
      expect(body.email).toEqual(email);
      expect(body.password).toEqual(password);
      expect(body.firstName).toEqual(firstName);
      expect(body.lastName).toEqual(lastName);
      expect(response).toEqual(json);
    });
  });

  describe('Facebook', () => {
    const user = 'user';

    beforeEach(() => {
      const response = {headers: {get() {return 'token';}}, body: {}, json() {return Promise.resolve(user);}};
      fetch = jest.fn(() => new Promise((resolve) => resolve(response)));
      fetch.pathParam = () => fetch.mock.calls[0][0];    
      fetch.requestBody = () => fetch.mock.calls[0][1];
    });

    it('SignIn', async () => {  
      const response = await userService.fbSignIn(token);
      expect(fetch.pathParam()).toEqual('http://localhost:4000/users/authenticate/facebook');
      //TODO: verify that body has _buffer with data
      const requestBody = fetch.requestBody();
      expect(requestBody.method).toEqual('POST');
      expect(response).toEqual(user);
    });  
  });

  it('signOut', () => {
  });
});