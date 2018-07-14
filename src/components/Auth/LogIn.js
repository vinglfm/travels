import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validaton from '../../_common/Validation';
import {logIn} from '../../_actions';
import {connect} from 'react-redux';
import UserService from '../../_services/userService'
import styles from './AuthModal.css';

export class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        };

        this.validation = new Validaton();
        this.logIn = this.logIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        UserService.logIn();
    }

    logIn(event) {
        this.props.logIn(this.state);
        this.props.onClose();
        event.preventDefault();
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    render() {    
        const emailError = this.validation.validateEmail(this.state);
        const passwordError = this.validation.validatePassword(this.state);
        const emailErrorMessage = emailError[0] ? emailError[0].message: '';
        const passwordErrorMessage = passwordError[0] ? passwordError[0].message: '';
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.onBack} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} noValidate>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={emailError === true || !this.state.email ? styles.modal__form__input : styles.modal__form__input__error} name='email' type='email' placeholder='Email' onChange={this.handleChange}/>
                    <div className={styles.modal__form__error}>
                        <span className={`${styles.modal__form__error__message} ${!this.state.email ? styles.modal__form__error__message__hidden : ''}`}>{emailErrorMessage}</span>
                    </div>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={passwordError === true || !this.state.password ? styles.modal__form__input : styles.modal__form__input__error} name='password' type='password' placeholder='Password'onChange={this.handleChange}/>
                    <div className={styles.modal__form__error}>
                        <span className={`${styles.modal__form__error__message} ${!this.state.password ? styles.modal__form__error__message__hidden : ''}`}>{passwordErrorMessage}</span>
                    </div>
                    <div className={styles.modal__form__group}>
                        <input className={styles.modal__form__group__submit} type='submit' disabled={emailError !== true || passwordError !== true} value='Log In'/>
                    </div>
                </form>
            </div>
        );
    }
}

LogIn.propTypes = {
    onBack: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    logIn
};

export default connect(null, mapDispatchToProps)(LogIn);