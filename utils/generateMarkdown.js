// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);

  if (license !== "No License Needed") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // conditional to check if no license selected=" "
  if (license !== "No License Needed") {
    return "\n6. [License](#License)";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(value);
  if (license !== "No License Needed") {
    return "#License";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  -----------------
  ${renderLicenseBadge(data.license)}
  -------------
  ## Table of Contents
  ------------
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributors](#Contributors)
  5. [Questions](#Questions)
  ${renderLicenseLink(data.license)}
  
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

${renderLicenseSection}

  # Questions
  ----------------
  Please feel free to reach out with any questions! 

My GitHub Account:
  
-[${data.username}](https://github.com/${data.username})

My Email:
  
- [mailto:${data.email}](${data.email})`;
}

module.exports = generateMarkdown;
