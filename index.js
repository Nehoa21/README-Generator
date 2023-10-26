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
      default: 'Contributing',
      message: 'Add other contributors to the project.',
      validate: (value) => {
        if(value) {
          return true;
        }
        return 'Add contributors before continuing.'
      }
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
  fileName = `./${data.name.toLowerCase().split(' ').join('')}.md`;
  
  fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => {
    err ? console.log(err) : console.log('README file was created!')
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    console.log(userInput);
  
    const mdFile = generateMarkdown(userInput);
    console.log(mdFile);
  
    await writeToFile('testREADME.md', mdFile);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
