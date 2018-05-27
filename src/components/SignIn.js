import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import styles from './SignInModal.css';

export default class SignIn extends Component {

    facebookResponse (resp) {
        console.log(resp);
    };

    render() {
        return (
            <div>
            <FacebookLogin
            appId='1817436878556969'
            autoLoad={false}
            fields='name,email'
            cssClass={styles.fb__button}
            callback={this.facebookResponse}
            textButton='Facebook'
            />
            <div className={styles.lines}>
                <span>or</span>
            </div>
            <div className={styles.log__in}><a onClick={this.props.logInComponent}>Log In</a></div>
            <div className={styles.sign__up}>First time travel? <a onClick={this.props.signUpComponent}>Sign Up</a></div>
        
            </div>
        );
    }
}

SignIn.propTypes = {
    logInComponent: PropTypes.func.isRequired,
    signUpComponent: PropTypes.func.isRequired,
};