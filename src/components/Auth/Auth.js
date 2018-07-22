import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import PropTypes from 'prop-types';
import styles from './AuthModal.css';
import {connect} from 'react-redux';
import config from '../../config';
import actions from '../../_actions';

export class Auth extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            component: 'Base'
        };

        this.facebookResponse = this.facebookResponse.bind(this);
        this.getComponent = this.getComponent.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
        this.baseComponent = this.baseComponent.bind(this);
    }

    facebookResponse (resp) {
        this.props.fbSignIn(resp.accessToken, () => {
            this.props.onSignIn();
        });
    }
  
    renderComponent(component) {
        this.setState({
            component
        });
    }

    baseComponent() {
        return (
            <div className={styles.auth}>
                <FacebookLogin appId={config.appId}
                autoLoad={false} fields='name,email'
                cssClass={styles.fb__button} callback={this.facebookResponse}
                textButton='Facebook' />
                <div className={styles.lines}>
                    <span>or</span>
                </div>
                <div className={styles.sign__in}><a onClick={() => this.renderComponent('SignIn')}>Sign In</a></div>
                <div className={styles.sign__up}>First time travel? <a onClick={() => this.renderComponent('SignUp')}>Sign Up</a></div>
            </div>);
    }

    getComponent() {
        switch(this.state.component) {
            case 'SignIn':
                return <SignIn onBack={() => this.renderComponent('Base')} onClose={() => this.props.onSignIn()}/>;
            case 'SignUp':
                return <SignUp onBack={() => this.renderComponent('Base')} onClose={() => this.props.onSignIn()}/>;
            default:
                return this.baseComponent();
        }
    }

    render() {
        return (<div>
            {this.getComponent()}
            </div>);
    }
}

Auth.propTypes = {
    onSignIn: PropTypes.func.isRequired 
};

const mapDispatchToProps = {
    fbSignIn: actions.fbSignIn
};

export default connect(null, mapDispatchToProps)(Auth);