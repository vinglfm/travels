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

        this.schema = {
            email: { type: 'email' },
            password: { type: 'string', min: 8, max: 16 }
        };

        this.logIn = this.logIn.bind(this);
        this.canSubmit = this.canSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    logIn() {
        console.log(this.refs.email.value);
        console.log(this.refs.password.value);
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    canSubmit() {
        return validator.validate(this.state, this.schema) === true;
    }

    render() {
        const isEnabled = this.canSubmit();
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.baseComponent} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} role='form'>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='email' type='email' ref='email' onChange={this.handleChange}/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='password' type='password' ref='password' placeholder='Password' onChange={this.handleChange}/>
                    <div className={styles.modal__form__group}>
                    <input className={styles.modal__form__group__submit} type='submit' disabled={!isEnabled} value='Create Account'/>
                    </div>
                </form>
            </div>
        );
    }
}

LogIn.propTypes = {
    baseComponent: PropTypes.func.isRequired
};