INSERT INTO department (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');


INSERT INTO job (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES
('Chun', 'Li', 1, 2),
('Solid', 'Snake', 1, 2),
('Samus', 'Aran', 3, 1),
('Master', 'Chef', 1, 1),
('Cloud', 'Strife', 4, 2),
('Marcus', 'Fenix', 3, 1),
('Fox', 'McCloud', 3, 3),
('Arthur', 'Morgan', 5, 4);