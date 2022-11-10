const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const buildPage = require("./SRC/htmlgenerator")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'names',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did you attend?',
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter your office number.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = buildPage(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

