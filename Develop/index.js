// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of licenses for user to choose from based on https://opensource.org/licenses/?categories=international%2Cother-miscellaneous%2Cpopular-strong-community%2Cspecial-purpose%2Csuperseded%2Cuncategorized

// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your App.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your App in a few words.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your App?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your App?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to your App?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test history and How-To: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose A License: ',
        // record popular licenses from https://opensource.org/licenses/?categories=popular-strong-community
        choices: ['Apache License, Version 2.0',
            'Common Development and Distribution License 1.0',
            'Eclipse Public License version 2.0',
            'GNU General Public License version 2',
            'GNU General Public License version 3',
            'GNU Lesser General Public License version 2.1',
            'GNU Lesser General Public License version 3',
            'GNU Library General Public License version 2',
            'Mozilla Public License 2.0',
            'The 2-Clause BSD License',
            'The 3-Clause BSD License',
            'The MIT License']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
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
            writeToFile('README.md', generateMarkdown(answers));
        });
}
// Function call to initialize app
init();
