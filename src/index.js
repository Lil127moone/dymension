// data-validation-lib.js

class DataValidation {
    constructor() {
      this.errors = [];
    }
  
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.errors.push('Invalid email address');
      }
    }
  
    validateUsername(username) {
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      if (!usernameRegex.test(username)) {
        this.errors.push('Invalid username. It must be 3-16 characters and can contain letters, numbers, underscores, and hyphens.');
      }
    }
  
    validatePassword(password) {
      // Add your password validation logic here
      // For simplicity, let's require at least 8 characters
      if (password.length < 8) {
        this.errors.push('Password must be at least 8 characters long.');
      }
    }
  
    getErrors() {
      return this.errors;
    }
  
    clearErrors() {
      this.errors = [];
    }
  }
  
  module.exports = DataValidation;
  