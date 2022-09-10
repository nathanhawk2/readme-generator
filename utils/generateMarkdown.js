const displayLicenseBadge = (name) => {
  let color = 'green';
  if (name ==='name')
  return `<img src='imglink' alt='badge' />`
};

module.exports = (answers) => {
  return  `# ${'title'}

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
  ${'license'}
  
  ## Contributing
  ${'contributing'}
  
  ## Tests
  ${'tests'}
  
  ## Questions
  ${'gitHub'}
  ${'email'}
  `
};