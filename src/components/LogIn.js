import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from 'fastest-validator';
import styles from './SignInModal.css';

const validator = new Validator();

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        };

        this.emailValidationSchema = {
            email: { type: 'email' }
        };

        this.passwordValidationSchema = {
            password: { type: 'string', min: 8, max: 16 }
        }

        this.logIn = this.logIn.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    logIn() {
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    validateEmail() {
        return validator.validate(this.state, this.emailValidationSchema) === true;
    }

    validatePassword() {
        return validator.validate(this.state, this.passwordValidationSchema) === true;
    }

    render() {
        const isValidEmail = this.validateEmail();
        const isValidPassword = this.validatePassword();
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} role='form'>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={isValidEmail ? styles.modal__form__input : styles.modal__form__input__error} name='email' type='email' ref='email' onChange={this.handleChange}/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={isValidPassword ? styles.modal__form__input : styles.modal__form__input__error} name='password' type='password' ref='password' placeholder='Password' onChange={this.handleChange}/>
                    <div className={styles.modal__form__group}>
                        <input className={styles.modal__form__group__submit} type='submit' disabled={!isValidEmail || !isValidPassword} value='Create Account'/>
                    </div>
                </form>
            </div>
        );
    }
}

LogIn.propTypes = {
    baseComponent: PropTypes.func.isRequired
};