import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthModal from './Auth/AuthModal';
import actions from '../_actions';
import {connect} from 'react-redux';
import styles from './Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAuthModal: false
        };
        this.openAuthModal = this.openAuthModal.bind(this);
        this.closeAuthModal = this.closeAuthModal.bind(this);
    }

    openAuthModal() {
        this.setState({
            openAuthModal: true
        });
    }

    closeAuthModal() {
        this.setState({
            openAuthModal: false
        });
    }

    render() {
        return (
            <div className={styles.header__root}>
                <AppBar title='Travels'>
                    <Toolbar>
                        <Typography variant='title' color='inherit' className={styles.header__title}>
                            Travels
                        </Typography>
                        {this.props.requireLogIn ? (
                            <Button color='inherit' onClick={this.openAuthModal}>Sign In</Button>
                        ) : (
                            <Button color='inherit' onClick={this.props.logOut}>Log out</Button>
                        )}
                    </Toolbar>
                </AppBar>
                <AuthModal open={this.state.openAuthModal} handleClose={this.closeAuthModal}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    requireLogIn: Object.keys(state.user).length === 0 
  });

const mapDispatchToProps = {
    logOut: actions.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);