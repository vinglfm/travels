import React, {Component} from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './Home.css';

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
  
  export default class LogInModal extends Component {
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
        <Modal isOpen={this.props.isOpen}
          onRequestClose={this.props.close}
          contentLabel='Log in'
          style={modalStyle}
          appElement={document.getElementById('root')}>
          <div className={styles.modal__header}>Log In</div>
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
        </Modal>
      );
    }
  }
  
  LogInModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  };