// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'What the app is for? (Name the App)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How to use the app?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install it?',
    },
    {
        type: 'input',
        name: 'report',
        message: 'How to report issues?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to make contributions?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md Generated!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const response = `
# App Name
${answers.appName}

## Description
${answers.description}

## Installation
${answers.installation}

## Report
${answers.report}

## Contributions
${answers.contribution}

`;

            writeToFile('README.md', response);
        });
}

// Function call to initialize app
init();
