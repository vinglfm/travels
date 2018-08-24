export default class Validation {
  emailSchema = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  validatePassword(password) {
    return password.length > 5 && password.length < 12;
  }

  validateEmail(email) {
    return this.emailSchema.test(email);
  }
}