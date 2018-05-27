import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import DialogContent from '@material-ui/core/DialogContent';
import FacebookLogin from 'react-facebook-login';
import styles from './Header.css';

export default class SignInModal extends Component {

    transition(props) {
        return <Fade {...props} />;
    }

    facebookResponse (resp) {
        console.log(resp);
    };

    render() {
        return (
            <Dialog
            open={this.props.open}
            TransitionComponent={this.transition}
            keepMounted
            onClose={this.props.handleClose}>
            <DialogTitle>Continue with</DialogTitle>
            <DialogContent>            
                <FacebookLogin
                appId='1817436878556969'
                autoLoad={false}
                fields='name,email'
                cssClass={styles.fb__button}
                callback={this.facebookResponse}
                textButton='Facebook'
                />
                <div className={styles.lines}>
                    <span>or</span>
                </div>
                <div className={styles.log_in}><a>Log In</a></div>
                <div className={styles.sign__up}>First time travel? <a>Sign Up</a></div>
            </DialogContent>
          </Dialog>
        );
    }
}

SignInModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};