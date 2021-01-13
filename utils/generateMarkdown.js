// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  
  ## Table of contents


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## License

  ${data.license}


  ## Contributing

  ${data.contributing}


  ## Test

  ${data.test}


  ## Questions

  If you have any questions reach out to me on github at ${data.github} or by email at ${data.email}.

  



`;
}

module.exports = generateMarkdown;
