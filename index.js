// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generate-logo')
//const {join} = require('path')

//Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:',
    }, {
        type: 'input',
        name: 'textColor',
        message: 'What color text would you like?',
    },{
        type: 'list',
        name: 'shape',
        message: 'Which logo shape would you like?',
        choices: ['circle', 'triangle', 'square']
    },{
        type: 'input',
        name: 'shapeColor',
        message: 'What color shape would you like?'
    }
]

//initializes the logo making process
inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('./examples/logo.svg', generateLogo(data), (err) => 
        err ? console.log(err) : console.log('Generated logo.svg'));
    })