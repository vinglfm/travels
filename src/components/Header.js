import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignInModal from './Auth/SignInModal.js';
import styles from './Header.css';

  export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.openSignInModal = this.openSignInModal.bind(this);
        this.closeSignInModal = this.closeSignInModal.bind(this);
    }

    openSignInModal() {
        this.setState({
            open: true
        });
    }

    closeSignInModal() {
        this.setState({
            open: false
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
                        <Button color='inherit' onClick={this.openSignInModal}>Sign In</Button>
                    </Toolbar>
                </AppBar>
                <SignInModal open={this.state.open} handleClose={this.closeSignInModal}/>
            </div>
        );
    }
}