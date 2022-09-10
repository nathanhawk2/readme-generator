// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    if (!fs.existsSync('output')) {
        fs.mkdirSync('output');
    }
    fs.writeFileSync('output/README.md', template);
});