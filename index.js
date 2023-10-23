// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
      // project name
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
      },
      {
        // project description
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        // installation instructions
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        // usage information
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        // contributions guidelines
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        // test instructions
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
        // lincense choice
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
        // GitHub username
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
        // email address
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// Title
// Description
// Installation
// Usage
// Contributing
// Tests
// License
// Questions
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
