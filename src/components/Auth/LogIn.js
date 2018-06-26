import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './AuthModal.css';

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
            password: { type: 'string', min: 5, max: 12 }
        }

        this.logIn = this.logIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    logIn() {
        console.log(this.state);
        this.props.onLogIn(this.state);
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    render() {
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} role='form' noValidate>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='email' type='email' onChange={this.handleChange}/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='password' type='password' placeholder='Password' onChange={this.handleChange}/>
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