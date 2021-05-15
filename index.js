// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMD = require('./Utilities/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'Please describe your project',
    'How do I install your app?',
    'What is this app used for?',
    'What license is being used for this project?',
    'What guidelines exist for contributing to this project?',
    'How will a user test this app?',
    'What is your GitHub Username?',
    'What is your email address?'
];

const [title, description, installation, usage, license, guidelines, test, GitHub, email] = questions;

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./RM/README.md', data, error => {
        if (error) {
            console.log(error)
            return
        }
        console.log('Created File Successfully')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: title,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: description,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: installation,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: usage,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: license,
            choices: ['Apache', 'MIT', 'GNU GPLv3', 'None'],
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: guidelines,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: test,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: GitHub,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: email,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please try again!')
                    return false
                }
            }
        },
    ])
}

// Function call to initialize app
init()
    .then(readmeData => {
        return genMD(readmeData);
    })
    .then(pageMD => {
        return writeToFile(pageMD);
    })
    .catch(error => {
        console.log(error)
    });
