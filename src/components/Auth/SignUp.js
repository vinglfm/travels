import React, {Component} from 'react';
import PropTypes from 'prop-types';
import actions from '../../_actions';
import {connect} from 'react-redux';
import Validaton from '../../_common/Validation';
import styles from './AuthModal.css';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
            firstName: '',
            lastName: ''
        };

        this.validation = new Validaton();
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    signUp(event) {
        this.props.logIn(this.state);
        this.props.onClose();
        event.preventDefault();
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    render() {
        const emailValidationError = this.validation.validateEmail(this.state);
        const passwordValidationError = this.validation.validatePassword(this.state);
        const emailErrorMessage = emailValidationError[0] ? emailValidationError[0].message: '';
        const passwordErrorMessage = passwordValidationError[0] ? passwordValidationError[0].message: '';
        return (
            <div>                           
                <div className={styles.modal__header}>                    
                    <a onClick={this.props.onBack} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Sign Up</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='signUpForm' onSubmit={this.signUp} noValidate>
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
    onBack: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    logIn: actions.logIn
};

export default connect(null, mapDispatchToProps)(SignUp);