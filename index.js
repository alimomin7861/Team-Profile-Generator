const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const { renderEmployees, writeHtmlToFile } = require('./src/generateHTML');

// Array to hold all employee objects
const employees = [];

// Prompt user to input information for Manager
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      employees.push(manager);
      console.log("Manager added successfully!");
      addEmployee();
    });
}

// Prompt user to input information for Engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(engineer);
      console.log("Engineer added successfully!");
      addEmployee();
    });
}

// Prompt user to input information for Intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employees.push(intern);
      console.log("Intern added successfully!");
      addEmployee();
    });
}

// Prompt user to add more employees or generate HTML file
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "All Employees Added!"]
      },
    ])
    .then((answers) => {
      if (answers.employeeType == "Manager") {
        addManager();
      } else if (answers.employeeType == "Engineer") {
        addEngineer();
      } else if (answers.employeeType == "Intern") {
        addIntern();
      } else {
        const html = renderEmployees(employees)
        writeHtmlToFile(html);
      }
    })
    .catch((err) => {
      console.error(err);
    })
}

addEmployee();

// Still getting an error after downgrading node version to 12.12.0