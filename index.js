// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const genMD = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'Please describe your project',
    'How do I install your app?',
    'What is this app used for?',
    'What guidlines exist for contributing to this project?',
    'How will a user test this app?',
    'What is your GitHub Username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if(err) {
            console.log(err)
            return
        }
        console.log('Created File Successfully')
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
