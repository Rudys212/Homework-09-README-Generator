//external packages and dependencies needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
// const { getUnpackedSettings } = require("http2");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username? (No @ needed)",
      name: "username",
    },
    {
      type: "input",
      message: "Enter the name of your GitHub Repository?",
      name: "repository",
    },
    {
      type: "input",
      message: "Enter the title of your project",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief description of your project",
      name: "description",
    },
    {
      type: "input",
      message:
        "Enter a description of how to install your project (Only enter if needed)",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter instructions and examples for the 'How to Use' section",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Enter the guidelines on how other developers can contribute to your project, if applicable",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Enter instructions on how to run tests written for your project, if applicable",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license you would want to add for your project",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
  ]);
};

inquirer
.prompt(questions)
.then(function(data)){
  const ghUrl = `https://api.github.com/users/${data.username}`;

  axios.get(ghUrl).then(function(res))
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Congrats! Your README.md file is now generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    console.log(res);

    const getData = generateMarkdown(res);

    writeToFile("readme.md", getData);
  });
}

// Function call to initialize app
init();
