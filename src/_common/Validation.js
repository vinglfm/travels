import Validator from 'fastest-validator';

export default class Validation {
    constructor() {
        this.validator = new Validator();

        this.emailSchema = {
            email: { type: 'email' }
        };

        this.passwordSchema = {
            password: { type: 'string', min: 5, max: 12 }
        };

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validateEmail(state, schema = this.emailSchema) {
        return this.validator.validate(state, schema);
    }

    validatePassword(state, schema = this.passwordSchema) {
        return this.validator.validate(state, schema);
    }
}