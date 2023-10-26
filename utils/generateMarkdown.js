// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  choice = 
    [
      'https://choosealicense.com/licenses/apache-2.0/',
      'https://choosealicense.com/licenses/mit/',
      'https://choosealicense.com/licenses/gpl-2.0/',
      'https://choosealicense.com/licenses/gpl-3.0/',
      ''
    ] 
    return license.choice
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

${data.license}

## Contact

GitHub: [@${data.github}](https://github.com/${data.github})

Email: ${data.email}

LinkedIn: ${data.linkedin}
`;
}

module.exports = generateMarkdown;
