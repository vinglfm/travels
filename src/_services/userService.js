import config from '../config';

export default {
    logIn,
    signIn,
    logOut
};

function logIn (username, password) {
    console.log(config.apiUrl);
}

function signIn(username, password, firstName, secondName) {

}

function logOut() {

}