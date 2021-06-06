// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  -----------------
  ## ${data.license}
  -------------
  ## Table of Contents
  ------------
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributors](#Contributors)
  5. [Questions](#Questions)
  
  # Description
  -----------
  ${data.description}
  # Installation
  -----------
  ${data.installation}
  # Usage
  ----------
  ${data.usage}
  # Contributors
  ------------
  ${data.contributors}
  # Questions
  ----------------
  Please feel free to reach out with any questions! 

  [GitHub](https://github.com/${data.username})

  - ${data.username} 

  - ${data.email}
  ${data.questions}`;
}

module.exports = generateMarkdown;
