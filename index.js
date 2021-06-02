//external packages and dependencies needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { getUnpackedSettings } = require("http2");
const generateMarkd = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username? (No @ before username needed)",
    name: "username",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
