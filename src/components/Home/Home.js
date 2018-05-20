import React, {Component} from 'react';
import SignUpModal from './SignUpModal.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignUpModal: false
    };

    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  
  openSignUpModal() {
    this.setState({openSignUpModal: true});
  }

  closeSignUpModal() {
    this.setState({openSignUpModal: false});
  }

  render() {
    return (
      <div>
        <p>Home</p>
        <div className='main__button' onClick={this.openSignUpModal}>Sign up</div>
        <SignUpModal isOpen={this.state.openSignUpModal} close={this.closeSignUpModal}/>
      </div>
    );
  }
}