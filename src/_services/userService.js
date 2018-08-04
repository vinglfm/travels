import config from '../config';

export default {
  signIn,
  fbSignIn,
  signUp,
  signOut
};

function signIn (email, password) {
  return fetch(`${config.apiUrl}/users/authenticate/signIn`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(handleResponse);
}

function signUp(email, password, firstName, lastName) {
  return fetch(`${config.apiUrl}/users/authenticate/signUp`, 
    {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, firstName, lastName})
    })
    .then(handleResponse);
}

function fbSignIn(accessToken) {
  const tokenBlob = new Blob([JSON.stringify({access_token: accessToken}, null, 2)], {type : 'application/json'});
  const options = {
    method: 'POST',
    body: tokenBlob,
    mode: 'cors',
    cache: 'default'
  };
  return fetch(`${config.apiUrl}/users/authenticate/facebook`, options).then((resp) => {
    const token = resp.headers.get('x-auth-token');
    return resp.json().then((user) => {
      if (token) {
        return user;
      } else {
        Promise.reject('Access token is not present');
      }
    });
  });
}

function signOut() {
}

function handleResponse(resp) {
  return resp.text()
    .then((text) => {
      const data = text && JSON.parse(text);
      if (!resp.ok) {
        //TODO: think to logout on 401 resp
        const error = (data && data.message) || resp.statusText;
        return Promise.reject(error);
      }
      return data;
    });
}