// assigning global variables that get inquirer and the two other js pages
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

// runs prompt function and asks all questions and then makes an output folder if there isnt one, then creates a file to put the readme info in
prompt(questions).then((answers) => {
    const template = generateMarkdown(answers);
    if (!fs.existsSync('output')) {
        fs.mkdirSync('output');
    }
    fs.writeFileSync('output/README.md', template);
});