import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SignInModal.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.signUp = this.signUp.bind(this);
    }

    signUp() {
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
    }

    render() {
        return (
            <div>           
                <div className={styles.modal__header}>
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Sign Up</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='signUpForm' onSubmit={this.signUp} role='form'>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} type='email' ref='email'/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} type='password' ref='password' placeholder='Password' minLength='8' maxLength='16'/>
                    <label className={styles.modal__form__label}>Full Name</label>
                    <input className={styles.modal__form__input__small} type='text' ref='firstName' placeholder='First'/>&nbsp;
                    <input className={styles.modal__form__input__small} type='text' ref='lastName' placeholder='Last'/>
                    <div className={styles.modal__form__group}>
                    <input className={styles.modal__form__group__submit} type='submit' value='Create Account'/>
                    </div>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    baseComponent: PropTypes.func.isRequired
};