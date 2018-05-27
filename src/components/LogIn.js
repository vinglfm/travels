import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SignInModal.css';

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.logIn = this.logIn.bind(this);
    }

    logIn() {
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
    }

    render() {
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} role='form'>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} type='email' ref='email'/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} type='password' ref='password' placeholder='Password' minLength='8' maxLength='16'/>
                    <div className={styles.modal__form__group}>
                    <input className={styles.modal__form__group__submit} type='submit' value='Create Account'/>
                    </div>
                </form>
            </div>
        );
    }
}

LogIn.propTypes = {
    baseComponent: PropTypes.func.isRequired
};