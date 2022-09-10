const fs = require('fs');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        message: 'Enter the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter the description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'test'
    },

// license

    {
        type: 'input',
        message: 'Provide your GitHub URL?',
        name: 'gitHub',
        default: 'https://github.com'
    },
    {
        type: 'input',
        message: 'Provide your E-Mail?',
        name: 'email',
    }
]).then((answers) => {
  console.log(answers);
  const template = `# Title ${'title'}

  ## Description
  ${'description'}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  ${'installation'}
  
  ## Usage
  ${'usage'}
  
  ## License
  ${'d'}
  
  ## Contributing
  ${'d'}
  
  ## Tests
  ${'tests'}
  
  ## Questions
  ${'gitHub'}
  ${'email'}
  `;
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
  fs.writeFileSync('output/index.html', template);
});