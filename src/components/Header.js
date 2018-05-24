import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import SignInModal from './SignInModal.js';

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
            <div>
                <AppBar title='Travels'
                    iconElementLeft={<IconButton></IconButton>}
                    iconElementRight={<FlatButton label='Sign In' onClick={this.openSignInModal}/>}
                />
                <SignInModal open={this.state.open} handleClose={this.closeSignInModal}/>
            </div>
        );
    }
}