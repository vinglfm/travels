import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
  
export default class SignInModal extends Component {

    transition(props) {
        return <Fade {...props} />;
    }

    render() {
        return (
            <Dialog
            open={this.props.open}
            TransitionComponent={this.transition}
            keepMounted
            onClose={this.props.handleClose}>
            <DialogTitle>Sign In</DialogTitle>
          </Dialog>
        );
    }
}

SignInModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};