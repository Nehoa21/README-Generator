// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = 
  [{
    // project name
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
      validate: (value) => {
        if(value.length < 1) {
          return 'A title is needed to continue.'
        }
        return true;
      }
    },
    {
      // project description
      type: 'input',
      name: 'description',
      default: 'The what, why, and how',
      message: 'Write a description explaining your project.',
    },
    {
      // installation instructions
      type: 'input',
      name: 'installation',
      default: 'Installation',
      message: 'Give instructions on how to install project.',
    },
    {
      // usage information
      type: 'input',
      name: 'usage',
      default: 'Usage',
      message: 'Give instructions how to run the project.',
    },
    {
      // contributions guidelines
      type: 'input',
      name: 'contributing',
      default: 'Contributing',
      message: 'Add other contributors to the project.',
    },
    {
      // tests
      type: 'input',
      name: 'tests',
      default: 'Tests',
      message: 'Add additional tests for your project.',
    },
    {
      // lincense choice
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      choices: 
        [
          'Apache License 2.0',
          'MIT License',
          'GNU General Public License v2.0',
          'GNU General Public License v3.0',
          'The Unlicense',
        ],
    },
    {
      // GitHub username
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? No @ needed.',
    },
    {
      // email address
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      // linkedIn
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
  fs.writeFile(fileName, data, (err) => {
    if(err) {
      console.log(err)
    }
    console.log('README file was created!')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data){
      writeToFile('GeneratedREADME.md', generateMarkdown(data))
    });
}

// Function call to initialize app
init();
