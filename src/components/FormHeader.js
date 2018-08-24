import React, { PureComponent } from 'react';
import styles from './Auth/AuthModal.css';

export default class FormHeader extends PureComponent {
  render() {
    return (
      <div className={styles.modal__header}>
        <a onClick={this.props.onBack} className={styles.modal__back}><i className='fas fa-arrow-left'></i></a>
        <span>{this.props.title}</span>
        <hr className={styles.modal__divider}/>
      </div>      
    );
  }
}