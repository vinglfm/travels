import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from 'fastest-validator';
import styles from './AuthModal.css';

const validator = new Validator();

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
            firstName: '',
            lastName: ''
        };

        this.emailValidationSchema = {
            email: { type: 'email' }
        };

        this.passwordValidationSchema = {
            password: { type: 'string', min: 5, max: 12 }
        }

        this.signUp = this.signUp.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    signUp() {
        console.log(this.state);
        this.props.onSignUp(this.state);
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
        console.log(elem.target.name, '=', elem.target.value);
    }

    validateEmail() {
        return validator.validate(this.state, this.emailValidationSchema);
    }

    validatePassword() {
        return validator.validate(this.state, this.passwordValidationSchema);
    }

    render() {
        const emailValidationError = this.validateEmail();
        const passwordValidationError = this.validatePassword();
        const emailErrorMessage = emailValidationError[0] ? emailValidationError[0].message: '';
        const passwordErrorMessage = passwordValidationError[0] ? passwordValidationError[0].message: '';
        return (
            <div>                           
                <div className={styles.modal__header}>                    
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Sign Up</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='signUpForm' onSubmit={this.signUp} role='form' noValidate>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={emailValidationError === true || !this.state.email ? styles.modal__form__input : styles.modal__form__input__error} name='email' type='email' placeholder='Email' onChange={this.handleChange}/>
                    <div className={styles.modal__form__error}>
                        <span className={`${styles.modal__form__error__message} ${!this.state.email ? styles.modal__form__error__message__hidden : ''}`}>{emailErrorMessage}</span>
                    </div>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={passwordValidationError === true || !this.state.password ? styles.modal__form__input : styles.modal__form__input__error} name='password' type='password' placeholder='Password'onChange={this.handleChange}/>
                    <div className={styles.modal__form__error}>
                        <span className={`${styles.modal__form__error__message} ${!this.state.password ? styles.modal__form__error__message__hidden : ''}`}>{passwordErrorMessage}</span>
                    </div>
                    <label className={styles.modal__form__label}>Full Name</label>
                    <input className={styles.modal__form__input__small} name='firstName' type='text' placeholder='First' onChange={this.handleChange}/>&nbsp;
                    <input className={styles.modal__form__input__small} name='lastName' type='text' placeholder='Last' onChange={this.handleChange}/>
                    <div className={styles.modal__form__group}>
                    <input className={styles.modal__form__group__submit} disabled={emailValidationError !== true || passwordValidationError !== true} type='submit' value='Create Account'/>
                    </div>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    baseComponent: PropTypes.func.isRequired
};