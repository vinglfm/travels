import React, {Component} from 'react';
import SignUpModal from './SignUpModal.js';
import LogInModal from './LogInModal.js';
import Header from '../Header.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignUpModal: false,
      openLogInModal: false
    };

    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
    this.openLogInModal = this.openLogInModal.bind(this);
    this.closeLogInModal = this.closeLogInModal.bind(this);
  }

  
  openSignUpModal() {
    this.setState({openSignUpModal: true});
  }

  closeSignUpModal() {
    this.setState({openSignUpModal: false});
  }

  openLogInModal() {
    this.setState({openLogInModal: true});
  }

  closeLogInModal() {
    this.setState({openLogInModal: false});
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          <div className='main__button' onClick={this.openSignUpModal}>Sign up</div>
          <SignUpModal isOpen={this.state.openSignUpModal} close={this.closeSignUpModal}/>
          <div className='main__button' onClick={this.openLogInModal}>Log In</div>
          <LogInModal isOpen={this.state.openLogInModal} close={this.closeLogInModal}/>
        </div>
      </div>
    );
  }
}