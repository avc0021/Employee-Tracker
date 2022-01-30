const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');
const db = require("./db/connection");


// Main menu to seclection desired data to view or add data
const init = function () {
    inquirer    
        .prompt([
            {
                type: "list",
                name: "etracker",
                message: "Please make a selection below",
                choices: [
                    "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department",
                    "Quit",
                ],    
            },
        ])
        .then((data) => {
            if (data.etracker === "View All Departments") {
                viewDepartments(data.etracker);
            }
            if (data.etracker === "View All Roles") {
                viewRoles(data.etracker);
            }
            if (data.etracker === "View All Employees") {
                viewEmployees(data.etracker);
            }
            if (data.etracker === "Quit") {
               return;
            }
        })
};

init();

// will view all employees from db
function viewEmployees() {
    let employees = `SELECT * FROM employee`;

                db.query(employees, (err, results) => {
                    if (err) throw err;
                    console.table(results);
                    return init();
                  
    });
};

// will view all departments from db
function viewDepartments () {
    const dept = `SELECT * FROM department`;
    console.log(`DEPARTMENT TABLE`);
  
    db.query(dept, (err, results) => {
      if (err) throw err;
      console.table(results);
      return init();
    });
  };

// will view all roles from db
function viewRoles () {
    const roles = `SELECT job.id, job.title, job.salary, department.name 
                   AS Department FROM job 
                   JOIN department ON job.department_id = department.id;`;
    console.log(`JOB TABLE`);
  
    db.query(roles, (err, results) => {
      if (err) throw err;
      console.table(results);
      return init();
    });
  };