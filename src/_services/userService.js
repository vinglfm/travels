import config from '../config';

export default {
    logIn,
    signIn,
    logOut
};

function logIn (username, password) {
    return fetch(`${config.apiUrl}/users/authenticate`, 
    {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(handleResponse);
}

function signIn(username, password, firstName, secondName) {

}

function logOut() {
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