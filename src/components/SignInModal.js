import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

  
export default class SignInModal extends Component {
    render() {
        return (
            <Dialog
            open={this.props.open}
            onRequestClose={this.props.handleClose}
            aria-labelledby='form-dialog-title'>
            Sign In dialog
          </Dialog>
        );
    }
}

SignInModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};