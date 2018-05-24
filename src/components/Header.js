import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends Component {
    render() {
        return (
            <AppBar title='Travels'
                iconElementLeft={<IconButton></IconButton>}
                iconElementRight={<FlatButton label='Sign In'/>}
            />
        );
    }
}