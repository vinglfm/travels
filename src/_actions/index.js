import userService from '../_services/userService';

const signIn = (data) => {
  return (dispatch) => {
    return userService.signIn(data.email, data.password)
      .then((user) => {
        return dispatch({
          type: 'SIGN_IN',
          user
        });
      }).catch((error) => {
        return dispatch({
          type: 'AUTH_ERROR',
          error
        });
      });
  };
};

const signUp = (data) => {
  return (dispatch) => {
    return userService.signUp(data.email, data.password, data.firstName, data.lastName)
      .then((user) => {
        return dispatch({
          type: 'SIGN_UP',
          user
        });
      }).catch((error) => {
        console.log(error);
      });
  };
};

const fbSignIn = (data, callback) => {
  return (dispatch) => {
    userService.fbSignIn(data)
      .then((user) => {
        dispatch({
          type: 'SIGN_IN',
          user
        });
      }).then(callback)
      .catch((error) => {
        console.log(error);
      });
  };
};

const signOut = () => ({
  type: 'SIGN_OUT'
});

export default {
  signIn,
  fbSignIn,
  signUp,
  signOut
};