import Validation from './Validation';

describe('Validation', () => {
  const validation = new Validation();

  describe('password', () => {
    it('should mark less then 6 character passwords as invalid', () => {
      const password = 'p'.repeat(5);
      const isValid = validation.validatePassword(password);
      expect(isValid).toBeFalsy();
    });

    it('should mark 6 character password as valid', () => {
      const password = 'p'.repeat(6);
      const isValid = validation.validatePassword(password);
      expect(isValid).toBeTruthy();
    });

    it('should mark 14 character password as valid', () => {
      const password = 'p'.repeat(14);
      const isValid = validation.validatePassword(password);
      expect(isValid).toBeTruthy();
    });

    it('should mark more then 14 character passwords as invalid', () => {
      const password = 'p'.repeat(15);
      const isValid = validation.validatePassword(password);
      expect(isValid).toBeFalsy();
    });
  });

  describe('email', () => {
    it('should mark email without @ as invalid', () => {
      const email = 'email.saddsa';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    it('should mark email without . as invalid', () => {
      const email = 'email@email';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });
    
    it('should mark email finished by . as invalid', () => {
      const email = 'email@email.';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    it('should mark email started by . as invalid', () => {
      const email = '.email@email.com';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    it('should mark email started by @ as invalid', () => {
      const email = '@email.s';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    
    it('should mark email finished by @ as invalid', () => {
      const email = 'ema@il.com@';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    it('should mark email with only alphabetic characters as invalid', () => {
      const email = 'emailcom';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeFalsy();
    });

    it('should mark well defined email as valid', () => {
      const email = 'email@sad.com';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBeTruthy();
    });
  });
});