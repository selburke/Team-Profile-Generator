//npm
const inquirer = require('inquirer');
const fs = require("fs");

//classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


//employee temps
const employees = [];

const manager = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Phone Number:",
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },{
    type: "input",
    name: "github",
    message: "GitHub:",
  }
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    ype: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "input",
    name: "school",
    message: "School:",
  },
];

// add html
async function showHtml() {
    const team = await createCard();
  
    let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <title>Team Profile</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>Team Profile</h1>
          </div>
        </div>
        ${team}
        </body>
        </html>`;

        fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
    }

    addManager();

function addManager() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "choice",
        message:
          "Would you like to begin creating your team profile?",
      },
    ])
    .then((val) => {
      if (val.choice) {
        inquirer.prompt(manager).then(function (managerAnswers) {
          const newManager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
          );
          employees.push(newManager);
          console.log(managerAnswers);
          addEmployee();
        });
      } else {
        this.quit();
      }
    });
}

async function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "new_employee",
        message:
          "What type of employee are you adding?",
        choices: ["Engineer", "Intern", "No other employees"],
      },
    ])
    .then((answers) => {
      if (answers.new_employee === "Intern") {
        inquirer.prompt(intern).then(function (internAnswers) {
          const newIntern = new Intern(
            internAnswers.name,
            internAnswers.id,
            internAnswers.email,
            internAnswers.school
          );

          employees.push(newIntern);
          console.log(internAnswers);
          addEmployee();
        });
      } else if (answers.new_employee === "Engineer") {
        inquirer.prompt(engineer).then(function (engineerAnswers) {
          const newEngineer = new Engineer(
            engineerAnswers.name,
            engineerAnswers.id,
            engineerAnswers.email,
            engineerAnswers.github
          );
          employees.push(newEngineer);
          console.log(engineerAnswers);
          addEmployee();
        });
      } else if (answers.new_employee === "No other employees") {
        showHtml();
 
      }
    });
}

let html2 = "";
function createCard() {
    var fullTeam = employees.length;
    var i = 0;
  employees.forEach((member) => {

    const name = member.getName();
    const id = member.getID();
    const role = member.getRole();
    const email = member.getEmail();

    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      html2 =
        html2+
    `<div>
      <div class="card-body">
        <h2>${name}</h2>
        <h2>Manager</h2>
        <p>ID: ${id}</p>
        <a href="#">Email: ${email}</a>
        <a href="#">Phone: ${officeNumber}</a>
      </div>
    </div>`;

    } else if (role === "Intern") {
      const school = member.getSchool();
      html2=
        html2 +
    `<div>
        <div class="card-body">
          <h2>${name}</h2>
          <h2>Intern</h2>
          <p class="card-text">
            Employee ID #: ${id} </p>
            <a href="#">Email: ${email} </a>
            <a href="#">School: ${school} </a>
          </p>
        </div>
      </div>`;

    } else if (role === "Engineer") {
      const github = member.getGithub();
      html2 =
        html2 +
    `<div>
      <div class="card-body">
        <h2>${name}</h2>
        <h2>#Engineer</h2>
        <p class="card-text">
          Employee ID #: ${id} </p>
          <a href="#">Email: ${email} </a>
          <a href="#">Github: https://github.com/${github} </a>
        </p>
      </div>
    </div>`;
    }
  });
  return html2;
}


