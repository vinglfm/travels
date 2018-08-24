import React, { PureComponent } from 'react';
import styles from './Auth/AuthModal.css';

export default class TextInput extends PureComponent {
  render() {
    return (
      <div>
        <label className={styles.modal__form__label}>{this.props.label}{this.props.required ? <span className={styles.modal__form__label__required}>*</span> : ''}</label>
        <input className={!this.props.error || !this.props.value ? styles.modal__form__input : styles.modal__form__input__error} name={this.props.name} type={this.props.type} onChange={this.props.onChange} />
        <div className={styles.modal__form__error}>
          <span className={`${styles.modal__form__error__message} ${this.props.value && this.props.error ? '' : styles.modal__form__error__message__hidden}`}>{this.props.errorMessage}</span>
        </div>
      </div>
    );
  }
}