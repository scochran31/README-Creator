// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } if (license === 'MIT') {
       return `![License Badge](https://img.shields.io/badge/License-MIT-blueviolet.svg)`
   } else if (license === 'Apache') {
        return `![License Badge](https://img.shields.io/badge/License-Apache-brightgreen.svg)`
   } else if (license === 'GNU GPLv3') {
        return `![License Badge](https://img.shields.io/badge/License-GNU_GPLv3-red.svg)`
   }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache') {
    return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'MIT') {
    return `[MIT](https://choosealicense.com/licenses/mit/)`
  } else if (license === 'GNU GPLv3') {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Test](#test)
  * [Links](#links)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## How to Use
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Guidelines
  ${data.guidelines}

  ## Test
  ${data.test}

  ## Links
  * ${data.repo}
  * ${data.deployed}

  ## Questions
  Contact me with any additonal questions through these channels:
  * GitHub - [${data.GitHub}](https://github.com/${data.GitHub})
  * Email - ${data.email}
`;
}

module.exports = generateMarkdown;
