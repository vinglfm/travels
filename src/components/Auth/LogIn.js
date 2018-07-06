import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {logIn} from '../../actions';
import {connect} from 'react-redux';
import styles from './AuthModal.css';

class LogIn extends Component {
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

    logIn(event) {
        this.props.logIn(this.state);
        this.props.onClose();
        event.preventDefault();
    }

    handleChange(elem) {
        this.setState({[elem.target.name]: elem.target.value});
    }

    render() {
        return (
            <div>
                <div className={styles.modal__header}>
                    <a onClick={this.props.onBack} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
                    <span>Log In</span>
                </div>
                <hr className={styles.modal__divider}/>
                <form className={styles.modal__form} name='LogInForm' onSubmit={this.logIn} noValidate>
                    <label className={styles.modal__form__label}>Email<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='email' type='email' onChange={this.handleChange}/>
                    <label className={styles.modal__form__label}>Password<span className={styles.modal__form__label__required}>*</span></label>
                    <input className={styles.modal__form__input} name='password' type='password' placeholder='Password' onChange={this.handleChange}/>
                    <div className={styles.modal__form__group}>
                        <input className={styles.modal__form__group__submit} type='submit' value='Log In'/>
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