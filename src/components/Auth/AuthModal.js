import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SignIn from './SignIn.js';
import styles from './AuthModal.css';


export default class AuthModal extends Component {
    render() {
        return (
            <Dialog
            open={this.props.open}
            onEnter={this.baseComponent}
            onClose={this.props.handleClose}>
            <DialogTitle>
                <div className={styles.dialog__title}>Continue with</div>
            </DialogTitle>
            <DialogContent>
                <SignIn onSignIn={this.props.handleClose}/>
            </DialogContent>
          </Dialog>
        );
    }
}

AuthModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};