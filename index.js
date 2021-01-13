// array of questions for user
// professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'   
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
},
{
    type: 'input',
    name: 'installation',
    message: 'How does user install your program?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What does user need to know about using your program?'
},
{
    type: 'input',
    name: 'license',
    message: 'What license should you give to your program?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?'
},
{
    type: 'input',
    name: 'test',
    message: 'What test did you run on this project?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}
];

// function to write README file
function writeToFile(fileName, data) {

    then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeToFile(fileName, JSON.stringify(data, null, 2), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    })
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(data => 
    console.log(data)) 
}

// function call to initialize program
init();
