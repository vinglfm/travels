import userService from '../_services/userService'

const logIn = data => {
    return dispatch => {
        console.log('dispatching');
        userService.logIn(data.email, data.password)
        .then(user => {
            console.log('2');
            dispatch({
                type: 'LOG_IN',
                user
            });
        }).catch(error => {
            console.log('3');
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