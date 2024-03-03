# Data Validation Library

This npm package provides a simple and versatile Data Validation Library for validating common data formats in JavaScript applications.

## Installation

To install the package, use npm:

```bash
npm install data-validation-lib
// Import the library
const DataValidation = require('data-validation-lib');

// Create an instance of DataValidation
const validator = new DataValidation();

// Example usage
validator.validateEmail('test@example.com');
validator.validateUsername('user123');
validator.validatePassword('securePassword');

// Get validation errors
const errors = validator.getErrors();
console.log(errors);
