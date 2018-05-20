import React, {Component} from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './Home.css';

const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  
  export default class SignUpModal extends Component {
    constructor(props) {
      super(props);
  
      this.signUp = this.signUp.bind(this);
    }
  
    signUp() {
      console.log(this.refs.email.value);
      console.log(this.refs.password.value);
      console.log(this.refs.firstName.value);
      console.log(this.refs.lastName.value);
    }
  
    render() {
      return (
        <Modal isOpen={this.props.isOpen}
          onRequestClose={this.props.close}
          contentLabel='Sign up'
          style={modalStyle}
          appElement={document.getElementById('root')}>
          <div className='modal__header'>Sign Up</div>
          <hr className="modal__divider"/>
          <form className='modal__form' name='signUpForm' onSubmit={this.signUp} role='form'>
            <label className='modal__form__label'>Email<span className='modal__form__label-required'>*</span></label>
            <input className='modal__form__input' type='email' ref='email'/>
            <label className='modal__form__label'>Password<span className='modal__form__label-required'>*</span></label>
            <input className='modal__form__input' type='password' ref='password' placeholder='Password' minLength='8' maxLength='16'/>
            <label className='modal__form__label'>Full Name</label>
            <input className='modal__form__input-small' type='text' ref='firstName' placeholder='First'/>&nbsp;
            <input className='modal__form__input-small' type='text' ref='lastName' placeholder='Last'/>
            <div className='modal__form__group'>
              <input className='modal__form__group__submit' type='submit' value='Create Account'/>
            </div>
          </form>
        </Modal>
      );
    }
  }
  
  SignUpModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  };