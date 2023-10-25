// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        }
        return 'A title is needed to continue.'
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
        }
        return 'Describe your project before continuing.'
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
        }
        return 'Please give instructions before continuing.'
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
        }
        return 'Please explain usage before continuing.'
      }
    },
    {
      // contributions guidelines
      type: 'input',
      name: 'contributing',
      message: 'Enter your GitHub Username',
      validate: (value) => {
        if(value) {
          return true;
        }
        return 'Add contributors before continuing.'
      }
    },
    {
      // test instructions
      type: 'input',
      name: 'tests',
      message: 'Enter your LinkedIn URL.',
    },
    {
      // lincense choice
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      choices: 
        [
          'apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause "Simplifed" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creeative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unlicense',
          'N/A'
        ],
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
    {
      // linkedIn
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn?',
    },
  ];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`
  
  fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => {
    err ? console.log(err) : console.log('README file was created!')
  });
}

// TODO: Create a function to initialize app
function init() {
  const userInput = inquirer.prompt(questions);
  console.log(userInput);

  const mdFile = generateMarkdown(userInput);
  console.log(mdFile);
}

// Function call to initialize app
init();
