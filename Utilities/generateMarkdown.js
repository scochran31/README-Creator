// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const urlBadge = license.replace('', '_')
  if (license === 'none') {
    return '';
  } else {
    return `![License Badge](https://img.shields.io/badge/License-${urlBadge}-blueviolet)`;
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
  } else {
    return `This project has been licensed under the ${license} guidelines. To learn more, [click here](https://choosealicense.com/licenses/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#escription)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Test](#test)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Guidelines
  ${data.guidelines}

  ## Test
  ${data.test}

  ## Questions
  Contact me with any additonal questions through these channels:
  * GitHub - [${data.GitHub}](https://github.com/${data.GitHub})
  * Email - ${data.email}
`;
}

module.exports = generateMarkdown;
