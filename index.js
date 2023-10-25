// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = 
  [{
    // project name
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'A title is needed to continue.'
        }
      }
    },
    {
      // project description
      type: 'input',
      name: 'description',
      message: 'Write a description explaining the what, why, and how of your project.',
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'Describe your project before continuing.'
        }
      }
    },
    {
      // installation instructions
      type: 'input',
      name: 'installation',
      message: 'Give instructions on how to install project.',
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'Please give instructions before continuing.'
        }
      }
    },
    {
      // usage information
      type: 'input',
      name: 'usage',
      message: 'Give instructions how to run the project.',
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'Please explain usage before continuing.'
        }
      }
    },
    {
      // contributions guidelines
      type: 'input',
      name: 'contributions',
      message: 'Enter your GitHub Username',
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'Add contributors before continuing.'
        }
      }
    },
    {
      // test instructions
      type: 'input',
      name: 'test',
      message: 'Enter your LinkedIn URL.',
    },
    {
      // lincense choice
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      choices: 
        [
          'The MIT License',
          'The GPL License', 
          'Apache License',
          'GNU License',
          'N/A'
        ],
      validate: (value) => {
        if(value) {
          return true;
        } else {
          return 'Select an option to continue.'
        }
      }  
    },
    {
      // GitHub username
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      // email address
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ];

inquirer.prompt([
  questions
])
.then((data) => {
  
});

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile()
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
