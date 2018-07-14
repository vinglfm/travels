import userService from '../_services/userService'

const logIn = data => {
    return dispatch => {
        userService.logIn(data.email, data.password)
        .then(user => {
            dispatch({
                type: 'LOG_IN',
                user
            });
        }).catch(error => {
            //TODO: maybe log out on false attempt
            console.log(error);
        });
    };    
}

const logOut = () => ({
    type: 'LOG_OUT'
});

export default {
    logIn,
    logOut
};