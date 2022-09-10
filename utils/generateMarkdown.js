const displayLicenseBadge = (name) => {
  let color = 'green';
  if (name ==='name')
  return `<img src='imglink' alt='badge' />`
};

// copied over from template.md then updated to fill in info from question prompts
module.exports = (answers) => {
  return  `# ${answers.title} ![GitHub License]('https://img.shields.io/badge/license-${answers.license}-${answers.licenseColor})

  ## Description
  ${answers.description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  How to install programs to run code
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Contributing Authors
  ${answers.contributing}
  
  ## Tests
  ${answers.test}
  
  ## Questions
  If you have any questions feel free to contact me at:
  GitHub: ${answers.gitHub}
  E-Mail: ${answers.email}
  `
};