import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validaton from '../../_common/Validation';
import FormHeader from '../FormHeader';
import TextInput from '../TextInput';
import actions from '../../_actions';
import { connect } from 'react-redux';
import styles from './AuthModal.css';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.validation = new Validaton();
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  signIn(event) {
    this.props.signIn(this.state);
    this.props.onClose();
    event.preventDefault();
  }

  handleChange(elem) {
    this.setState({ [elem.target.name]: elem.target.value });
  }

  render() {
    const emailValidation = {error: !this.validation.validateEmail(this.state.email), message: 'Email is not valid'};
    const passwordValidation = {error: !this.validation.validatePassword(this.state.password), message: 'Password should be between 5 and 12 characters'};
    return (
      <div>
        <FormHeader title='Sign In' onBack={this.props.onBack}/>
        <form className={styles.modal__form} name='SignInForm' onSubmit={this.signIn} noValidate>
          <TextInput label='Email' type='email' name='email'
            required='true' error={emailValidation.error} errorMessage={emailValidation.message}
            value={this.state.email} onChange={this.handleChange}/>
          <TextInput label='Password' type='password' name='password'
            required='true' error={passwordValidation.error} errorMessage={passwordValidation.message}
            value={this.state.password} onChange={this.handleChange}/>
          <div className={styles.modal__form__group}>
            <input className={styles.modal__form__group__submit} disabled={emailValidation.error || passwordValidation.error} type='submit' value='Sign In' />
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  signIn: actions.signIn
};

export default connect(null, mapDispatchToProps)(SignIn);