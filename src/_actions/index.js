import userService from '../_services/userService'

const signIn = data => {
    return dispatch => {
        userService.signIn(data.email, data.password)
        .then(user => {
            dispatch({
                type: 'SIGN_IN',
                user
            });
        }).catch(error => {
            //TODO: maybe log out on false attempt
            console.log(error);
        });
    };    
};

const signUp = data => {
    return dispatch => {
        userService.signUp(data.email, data.password, data.firstName, data.lastName)
        .then(user => {
            dispatch({
                type: 'SIGN_UP',
                user
            });
        }).catch(error => {
            //TODO: maybe log out on false attempt
            console.log(error);
        });
    };    
};

const fbSignIn = (data, callback) => {
    return dispatch => {
        userService.fbSignIn(data)
        .then(user => {
            dispatch({
                type: 'SIGN_IN',
                user
            });
        }).then(callback)
        .catch(error => {
            //TODO: maybe log out on false attempt
            console.log(error);
        });
    };
}

const signOut = () => ({
    type: 'SIGN_OUT'
});

export default {
    signIn,
    fbSignIn,
    signUp,
    signOut
};