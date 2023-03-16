const fs = require('fs');
const path = require('path');

// Function to generate the HTML for a single employee
function renderEmployee(employee) {
  let roleSpecificHtml = '';
  if (employee.getRole() === 'Manager') {
    roleSpecificHtml = `Office Number: ${employee.getOfficeNumber()}`;
  } else if (employee.getRole() === 'Engineer') {
    roleSpecificHtml = `GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
  } else if (employee.getRole() === 'Intern') {
    roleSpecificHtml = `School: ${employee.getSchool()}`;
  }

  return `
    <div class="card">
      <div class="card-header">
        <h3>${employee.getName()}</h3>
        <h4>${employee.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul>
          <li>ID: ${employee.getID()}</li>
          <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li>${roleSpecificHtml}</li>
        </ul>
      </div>
    </div>
  `;
}

// Function to generate the complete HTML page for all employees
function renderEmployees(employees) {
  const employeeCardsHtml = employees.map(renderEmployee).join('');
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>My Team</title>
        <style>
          /* Styles for the card layout */
          .card {
            border: 1px solid #ccc;
            border-radius: 4px;
            margin: 20px;
            width: 300px;
            display: inline-block;
            vertical-align: top;
          }
          .card-header {
            background-color: #f00;
            color: #fff;
            padding: 10px;
            text-align: center;
          }
          .card-body {
            padding: 10px;
          }
          /* Style for the main heading */
          h1 {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          ${employeeCardsHtml}
        </main>
      </body>
    </html>
  `;
}

// Function to write the HTML to a file
function writeHtmlToFile(html) {
  const outputPath = path.resolve(__dirname, './dist/team.html');
  fs.writeFileSync('./dist/team.html', html);
  console.log(`Wrote HTML to './dist/team.html'`);
}

module.exports = {
  renderEmployees,
  writeHtmlToFile
};
