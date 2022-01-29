const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');
const db = require("./db/connection");

// will view all employees from db
function viewEmployees

// will view all departments from db

// will view all roles from db


// Main menu to seclection desired data to view or add data
const init = function () {
    inquirer    
        .prompt([
            {
                type: "list",
                name: "etracker",
                message: "Please make a selection below using by using UP/DOWN arrows",
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