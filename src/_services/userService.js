import config from '../config';

export default {
    signIn,
    signUp,
    signOut
};

function signIn (username, password) {
    return fetch(`${config.apiUrl}/users/authenticate/signIn`, 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleResponse);
}

function signUp(username, password, firstName, secondName) {
    return fetch(`${config.apiUrl}/users/authenticate/signUp`, 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleResponse);
}

function signOut() {
}

function handleResponse(resp) {
    return resp.text()
    .then(text => {
        const data = text && JSON.parse(text);
        if (resp.ok) {
        } else {
            //TODO: think to logout on 401 resp
            const error = (data && data.message) || resp.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}