import React, {Component} from 'react';
import PropTypes from 'prop-types';
import actions from '../../_actions';
import {connect} from 'react-redux';
import FormHeader from '../FormHeader';
import TextInput from '../TextInput';
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
    this.props.signUp(this.state);
    this.props.onClose();
    event.preventDefault();
  }

  handleChange(elem) {
    this.setState({[elem.target.name]: elem.target.value});
  }

  render() {
    const emailValidation = {error: !this.validation.validateEmail(this.state.email), message: 'Email is not valid'};
    const passwordValidation = {error: !this.validation.validatePassword(this.state.password), message: 'Password should be between 5 and 12 characters'};
    return (
      <div>
        <FormHeader title='Sign Up' onBack={this.props.onBack}/>
        <form className={styles.modal__form} name='signUpForm' onSubmit={this.signUp} noValidate>
          <TextInput label='Email' type='email' name='email'
            required='true' error={emailValidation.error} errorMessage={emailValidation.message}
            value={this.state.email} onChange={this.handleChange}/>
          <TextInput label='Password' type='password' name='password'
            required='true' error={passwordValidation.error} errorMessage={passwordValidation.message}
            value={this.state.password} onChange={this.handleChange}/>          
          <label className={styles.modal__form__label}>Full Name</label>
          <input className={styles.modal__form__input__small} name='firstName' type='text' placeholder='First' onChange={this.handleChange}/>&nbsp;
          <input className={styles.modal__form__input__small} name='lastName' type='text' placeholder='Last' onChange={this.handleChange}/>
          <div className={styles.modal__form__group}>
            <input className={styles.modal__form__group__submit} disabled={emailValidation.error || passwordValidation.error} type='submit' value='Create Account'/>
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
  signUp: actions.signUp
};

export default connect(null, mapDispatchToProps)(SignUp);