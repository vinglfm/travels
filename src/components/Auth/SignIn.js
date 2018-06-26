import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import styles from './AuthModal.css';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.facebookResponse = this.facebookResponse.bind(this);
    }

    facebookResponse (resp) {
        console.log(resp);
        this.props.onSignIn();
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
    onSignIn: PropTypes.func.isRequired 
};