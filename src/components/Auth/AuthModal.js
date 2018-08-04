import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Auth from './Auth.js';
import styles from './AuthModal.css';


export default class AuthModal extends Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onEnter={this.baseComponent}
        onClose={this.props.handleClose}
        maxWidth='xs'
        fullWidth={true}>
        <DialogTitle>
          <div className={styles.dialog__title}>Continue with</div>
        </DialogTitle>
        <DialogContent>
          <Auth onSignIn={this.props.handleClose} />
        </DialogContent>
      </Dialog>
    );
  }
}

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};